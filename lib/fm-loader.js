const matter = require("gray-matter");

module.exports = async function (src) {
	const callback = this.async();
	let headings = [];

	src.split(/```/g).forEach((src, i) => {
		if (i % 2 === 1) return;
		const regex1 = /((^|\n)#{1,3} .+)+?/g;
		const matched = src.match(regex1);
		if (matched && matched.length > 0) headings.push(...matched);
	});
	const { content, data } = matter(src);
	data.contents = headings.map((h) =>
		h.replace(/\[(.+)\]\(.+\)/, (e, g) => g)
	);
	const code = `${
		Object.keys(data).length === 0
			? ""
			: `export const frontMatter = ${JSON.stringify(data)};\n\n`
	}${content}`;
	return callback(null, code);
};

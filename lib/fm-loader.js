const matter = require("gray-matter");

module.exports = async function (src) {
	const callback = this.async();
	const { content, data } = matter(src);
	const code = `${
		Object.keys(data).length === 0
			? ""
			: `export const frontMatter = ${JSON.stringify(data)};\n`
	}${content}`;
	return callback(null, code);
};

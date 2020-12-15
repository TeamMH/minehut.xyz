const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");
const path = require("path");

console.log(process.env.TEST_VAR);

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx", "md"],
	webpack(config) {
		config.module.rules
			.filter(
				(r) =>
					Object.keys(r).includes("use") &&
					r.test.toString().includes("mdx")
			)[0]
			.use.push(path.join(__dirname, "./lib/fm-loader.js"));
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	async redirects() {
		return [
			{
				source: "/home",
				destination: "/",
				permanent: true,
			},
		];
	},
});

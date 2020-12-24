const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

const path = require("path");

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx", "md"],
	webpack(config, { isServer }) {
		config.module.rules
			.find(
				(r) =>
					Object.keys(r).includes("use") &&
					r.test.toString().includes("mdx")
			)
			.use.push(path.join(__dirname, "./lib/fm-loader.js"));
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		if (!isServer) {
			if (config.node) config.node.fs = "empty";
			else
				config.node = {
					fs: "empty",
				};
		}

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

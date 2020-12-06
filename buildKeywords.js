const keywordOverrides = require("./keywordOverrides.json");

const keywords = {};
const routes = {};

const fs = require("fs");
const path = require("path");

function readFile(directory, file) {
	if (
		!path.extname(file).match(/mdx?$/) ||
		path.basename(file).match(/404\.mdx?$/)
	)
		return;
	const routeParents = path
		.join(directory, file)
		.split(path.sep)
		.slice(1)
		.reverse()
		.slice(1)
		.reverse()
		.map((p) => {
			let name = p
				.replace(/-./g, (e) => " " + e[1].toUpperCase())
				.split("")
				.map((c, i) => (i === 0 ? c.toUpperCase() : c))
				.join("");
			keywordOverrides.forEach((exception) => {
				name = name.replace(
					new RegExp(exception[0], "g"),
					exception[1]
				);
			});
			return name;
		});
	let name = path.basename(file).match(/index\..+$/)
		? "Home"
		: path
				.basename(file)
				.replace(/\.mdx?$/, "")
				.replace(/-./g, (e) => " " + e[1].toUpperCase())
				.split("")
				.map((c, i) => (i === 0 ? c.toUpperCase() : c))
				.join("");

	keywordOverrides.forEach(
		(exception) =>
			(name = name.replace(new RegExp(exception[0], "g"), exception[1]))
	);

	const src = fs.readFileSync(path.join(directory, file), "utf-8");

	let headings = [];

	src.split(/```/g).forEach((src, i) => {
		if (i % 2 === 1) return;
		const regex1 = /((^|\n)#{1,3} .+)+?/g;
		const matched = src.match(regex1);
		if (matched && matched.length > 0) headings.push(...matched);
	});

	headings = headings.map((h) => h.replace(/\[(.+)\]\(.+\)/, (e, g) => g));

	let keywordDir = keywords;

	routeParents.forEach((parent) => {
		if (!keywordDir[parent]) keywordDir[parent] = {};
		keywordDir = keywordDir[parent];
	});

	keywordDir[name] = headings;

	const route =
		"/" +
		(name === "Home"
			? ""
			: path
					.join(directory, file)
					.replace(/\\+/g, "/")
					.split("/")
					.slice(1)
					.join("/")
					.replace(/\.mdx?$/, "")
		).toLowerCase();

	let dir = routes;

	routeParents.forEach((parent) => {
		if (!dir[parent])
			dir[parent] = {
				__dirroute__: route
					.split("/")
					.slice(0, route.split("/").length - 1)
					.join("/"),
			};
		dir = dir[parent];
	});

	dir[name] = route;
}

function readDir(directory) {
	fs.readdirSync(directory, "utf-8").forEach((file) => {
		if (file === "index.md") return;
		if (fs.lstatSync(path.join(directory, file)).isFile()) {
			readFile(directory, file);
		} else {
			readDir(path.join(directory, file));
		}
	});
}

readFile("./pages", "index.md");
keywords["Plugin List"] = ["PLUGIN LIST"];
readDir("./pages");
routes["Plugins"]["Plugin List"] = "/plugins/plugin-list";

function sortRoutes(routes, reverse) {
	const sortedKeys = Object.keys(routes).sort((a, b) => {
		if (typeof routes[a] === "object" && typeof routes[b] !== "object")
			return 1;
		else if (
			(typeof routes[a] === "object" && typeof routes[b] === "object") ||
			(typeof routes[a] === "string" && typeof routes[b] === "string")
		)
			return 0;
		else return -1;
	});

	const newRoutes = {};

	sortedKeys.forEach((key) => {
		if (typeof routes[key] === "object")
			newRoutes[key] = sortRoutes(routes[key]);
		else newRoutes[key] = routes[key];
	});

	return newRoutes;
}

fs.writeFileSync("./keywords.json", JSON.stringify(keywords, null, "    "));
fs.writeFileSync(
	"./routes.json",
	JSON.stringify(sortRoutes(routes), null, "    ")
);

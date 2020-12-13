import { useState } from "react";
import routeOverrides from "../routeOverrides.json";

/**
 * Get a simplified array of the routes
 * @param {object} routes
 */
export function routesArray(routes) {
	const array = [];
	Object.keys(routes).forEach((route) => {
		if (typeof routes[route] === "string") {
			array.push([
				route,
				routes[route],
				routes[route]
					.split("/")
					.slice(1)
					.map((route) => overrideRouteNames(kebabToStartCase(route)))
					.join("/"),
			]);
		} else array.push(...routesArray(routes[route]));
	});
	return array;
}

export function routesArrayCategory(routes, dirName) {
	const array = [];
	Object.keys(routes).forEach((route) => {
		if (route === "__dirroute__") return;
		if (typeof routes[route] === "string")
			array.push([route, routes[route], dirName]);
		else array.push(...routesArrayCategory(routes[route], route));
	});
	return array;
}

/**
 * Convert kebab case (hello-there) to start case (Hello There)
 * @param {string} string
 */
export function kebabToStartCase(string) {
	return string
		.replace(/-./g, (e) => " " + e[1].toUpperCase())
		.split("")
		.map((c, i) => (i === 0 ? c.toUpperCase() : c))
		.join("");
}

/**
 * Convert start case (Hello There) to kebab case (hello-there)
 * @param {string} string
 */
export function startToKebabCase(string) {
	return string?.toLowerCase().replace(/ +/g, "-");
}

/**
 * Override route names according to `routeOverrides.json`
 * @param {string} string
 */
export function overrideRouteNames(string) {
	if (string)
		routeOverrides.forEach((override) => {
			string = string.replace(new RegExp(override[0], "g"), override[1]);
		});

	return string;
}

/**
 * Override route names according to `routeOverrides.json` in reverse
 * @param {string} string
 */
export function reverseOverrideRouteNames(string) {
	if (string)
		routeOverrides.forEach((override) => {
			string = string.replace(new RegExp(override[1], "g"), override[0]);
		});

	return string;
}

/**
 * Copy `text` to the clipboard
 * @param {string} text
 */
export function copyToClipboard(text) {
	const el = document.createElement("textarea");
	el.value = text;
	el.setAttribute("readonly", "");
	el.style = {
		position: "absolute",
		left: "-9999px",
	};
	document.body.appendChild(el);
	el.select();
	el.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.body.removeChild(el);
}

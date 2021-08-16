import { makeStyles, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useRouter } from "next/router";
import routes from "../routes.json";
import { useEffect, useState } from "react";
import {
	kebabToStartCase,
	overrideRouteNames,
	reverseOverrideRouteNames,
	startToKebabCase,
} from "../lib/utils";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
	textField: {
		width: "100%",
		marginTop: theme.spacing(2),
	},
}));

export default function Search() {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	function getRoutes(routes) {
		const returnRoutes = [];
		Object.keys(routes).forEach((route) => {
			if (typeof routes[route] === "string")
				returnRoutes.push([route, routes[route]]);
			else returnRoutes.push(...getRoutes(routes[route]));
		});
		return returnRoutes;
	}

	const mappedRoutes = getRoutes(routes);

	const router = useRouter();

	const [query, setQuery] = useState("");

	useEffect(() => {
		const search = document.querySelector("input");

		if (search && query !== router.query.q) {
			search.focus();
			setQuery(router.query.q || "");
			setOpen(!!router.query.q);
		}
	}, [router]);

	return (
		<Autocomplete
			autoComplete
			autoHighlight
			freeSolo
			onOpen={() => {}}
			open={open}
			inputValue={query}
			options={mappedRoutes.map((r) =>
				r[1] === "/"
					? "Home"
					: r[1].replace(/(\/(.+))?\/(.+)$/g, (e, g, g1, g2) => {
							return `${overrideRouteNames(kebabToStartCase(g2))}${
								g1
									? ` (${g1
											.split("/")
											.map((name) => overrideRouteNames(kebabToStartCase(name)))
											.join(" > ")})`
									: ""
							}`;
					  })
			)}
			renderInput={(params) => (
				<TextField
					{...params}
					className={classes.textField}
					label="Search..."
					variant="filled"
					InputProps={{
						...params.InputProps,
					}}
				/>
			)}
			onBlur={() => {
				setOpen(false);
			}}
			onFocus={(e) => {
				setOpen(!!e.target.value);
			}}
			filterOptions={(options, props) => {
				const inputValue = (props.inputValue || query || "").toLowerCase();

				return options
					.sort((a, b) => {
						a = a
							.toLowerCase()
							.replace(
								/^(.+)( \((.+)\))$/g,
								(e, g1, g2, g3) => `${g3.replace(/ > /g, " ")} ${g1}`
							);
						b = b
							.toLowerCase()
							.replace(
								/^(.+)( \((.+)\))$/g,
								(e, g1, g2, g3) => `${g3.replace(/ > /g, " ")} ${g1}`
							);
						if (
							a.split(" ").some((name) => name.toLowerCase() === inputValue) &&
							!b.split(" ").some((name) => name.toLowerCase() === inputValue)
						)
							return -1;
						else if (
							!a.split(" ").some((name) => name.toLowerCase() === inputValue) &&
							b.split(" ").some((name) => name.toLowerCase() === inputValue)
						)
							return 1;
						else return 0;
					})
					.sort((a, b) => {
						a = a
							.toLowerCase()
							.replace(
								/^(.+)( \((.+)\))$/g,
								(e, g1, g2, g3) => `${g3.replace(/ > /g, " ")} ${g1}`
							);
						b = b
							.toLowerCase()
							.replace(
								/^(.+)( \((.+)\))$/g,
								(e, g1, g2, g3) => `${g3.replace(/ > /g, " ")} ${g1}`
							);
						if (
							a
								.split(" ")
								.some((name) => name.toLowerCase().startsWith(inputValue)) &&
							!b
								.split(" ")
								.some((name) => name.toLowerCase().startsWith(inputValue))
						)
							return -1;
						else if (
							!a
								.split(" ")
								.some((name) => name.toLowerCase().startsWith(inputValue)) &&
							b
								.split(" ")
								.some((name) => name.toLowerCase().startsWith(inputValue))
						)
							return 1;
						else return 0;
					})
					.filter(
						(option) =>
							option
								.toLowerCase()
								.replace(
									/^(.+)( \((.+)\))$/g,
									(e, g1, g2, g3) => `${g3.replace(/ > /g, " ")} ${g1}`
								) === inputValue ||
							option
								.toLowerCase()
								.replace(
									/^(.+)( \((.+)\))$/g,
									(e, g1, g2, g3) => `${g3.replace(/ > /g, " ")} ${g1}`
								)
								.includes(inputValue)
					);
			}}
			onChange={(e, v) => {
				setQuery(v);
				setOpen(!!v);
				let pathname = v
					? `/${startToKebabCase(
							reverseOverrideRouteNames(
								v.replace(
									/^(.+)( \((.+)\))$/g,
									(e, g1, g2, g3) => `${g3.replace(/ > /g, "/")}/${g1}`
								)
							)
					  )}`
					: null;

				if (pathname === "/home") pathname = "/";

				const route = mappedRoutes.find((route) => route[1] === pathname);

				if (route)
					router.push({
						pathname,
					});
			}}
			onInputChange={(e, v) => {
				setQuery(v);
				setOpen(!!v);
			}}
		/>
	);
}

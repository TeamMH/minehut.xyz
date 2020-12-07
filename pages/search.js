import { Divider, makeStyles, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useRouter } from "next/router";
import routes from "../routes.json";
import overrides from "../routeOverrides.json";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
	textField: {
		width: "100%",
		marginTop: theme.spacing(2),
	},
	heading: {
		margin: theme.spacing(3, 0),
		whiteSpace: "pre-wrap !important",
		overflowWrap: "anywhere",
		wordBreak: "break-word",
		position: "relative",
		"& button": {
			display: "none",
		},
		"&:hover button": {
			display: "inline-block",
		},
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

	const [query, setQuery] = useState(null);

	useEffect(() => {
		const search = document.querySelector("input");

		if (search && query !== router.query.q) {
			search.focus();
			setQuery(router.query.q);
		}
	});

	return (
		<>
			<Typography className={classes.heading} variant="h4" component="h1">
				SEARCH
			</Typography>
			<Divider />
			<Autocomplete
				autoComplete
				autoHighlight
				freeSolo
				open={open}
				value={query}
				options={mappedRoutes.map((r) =>
					r[1] === "/"
						? "HOME"
						: r[1]
								.split("/")
								.slice(1)
								.map((name) => {
									name = name
										.replace(
											/-./g,
											(e) => " " + e[1].toUpperCase()
										)
										.split("")
										.map((c, i) =>
											i === 0 ? c.toUpperCase() : c
										)
										.join("");

									overrides.forEach(
										(override) =>
											(name = name.replace(
												new RegExp(override[0], "g"),
												override[1]
											))
									);

									return name.toUpperCase();
								})
								.join(" > ")
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
					const inputValue = props.inputValue || query || "";
					return options
						.sort((a, b) => {
							if (
								a.startsWith(inputValue) &&
								!b.startsWith(inputValue)
							)
								return 1;
							else if (
								!a.startsWith(inputValue) &&
								b.startsWith(inputValue)
							)
								return -1;
							else return 0;
						})
						.filter((option) => {
							const includes =
								option.includes(inputValue.toUpperCase()) ||
								option
									.replace(/ > /g, " ")
									.includes(inputValue.toUpperCase());
							return includes;
						});
				}}
				onChange={(e, v) => {
					let pathname = `/${v}`;

					overrides.forEach(
						(override) =>
							(pathname = pathname.replace(
								new RegExp(override[1].toUpperCase(), "g"),
								override[0].toLowerCase()
							))
					);

					pathname = pathname
						.toLowerCase()
						.replace(/ > /g, "/")
						.replace(/ +/g, "-");

					if (pathname === "/home") pathname = "/";

					const route = mappedRoutes.find(
						(route) => route[1] === pathname
					);

					if (route)
						router.push({
							pathname,
						});
				}}
				onInputChange={(e, v) => setOpen(!!v)}
				defaultValue={query}
			/>
		</>
	);
}

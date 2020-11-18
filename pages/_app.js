import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CustomDrawer from "../src/CustomDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import {
	Container,
	Divider,
	Fab,
	Link,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { CookiesProvider, useCookies } from "react-cookie";
import CustomAppBar from "../src/CustomAppBar";
import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import materialLight from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";
import colors from "../colors.json";

const useStyles = makeStyles((theme) => {
	return {
		root: {
			display: "flex",
			fontSize: "1rem",
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3, 0),
		},
		navTheme: {
			marginRight: theme.spacing(1),
		},
		discordFab: {
			position: "fixed",
			bottom: theme.spacing(2),
			right: theme.spacing(2),
			fontSize: 26,
			color: "white",
		},
		link: {
			color: theme.palette.info.main,
		},
		heading: {
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(3),
		},
		code: {
			whiteSpace: "pre-line !important",
			"& code": {
				whiteSpace: "pre-line !important",
			},
		},
	};
});

const themeObject = {
	palette: {
		type: "dark",
		background: {
			default: colors.dark.default,
			paper: colors.dark.default,
		},
		secondary: {
			main: "#7289DA",
			light: "#7289DA",
			dark: "#7289DA",
		},
	},
};

const useDarkMode = (setCookie) => {
	const [theme, setTheme] = React.useState(themeObject);

	const {
		palette: { type },
	} = theme;
	const toggleDarkMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === "light" ? "dark" : "light",
				background: {
					default: type === "dark" ? "#f3f3f3" : "#1f2835",
					paper: type === "dark" ? "#eeeeee" : "#273142",
				},
			},
		};
		setCookie("theme", type === "dark" ? "light" : "dark");
		setTheme(updatedTheme);
	};
	return [theme, toggleDarkMode];
};

const appBarTheme = createMuiTheme(themeObject);

export default function MinehutXYZ(props) {
	const classes = useStyles();

	const [cookies, setCookie] = useCookies(["theme"]);
	if (!cookies.theme) setCookie("theme", "dark");
	themeObject.palette.type = cookies.theme || "dark";
	themeObject.palette.background.default =
		themeObject.palette.type === "light"
			? colors.light.default
			: colors.dark.default;
	themeObject.palette.background.paper =
		themeObject.palette.type === "light"
			? colors.light.paper
			: colors.dark.paper;

	const [theme, toggleDarkMode] = useDarkMode(setCookie);

	const { Component, pageProps } = props;
	const themeConfig = createMuiTheme(theme);

	const [open, setOpen] = React.useState(false);

	const components = {
		h1(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="h3"
				/>
			);
		},
		h2(props) {
			return (
				<>
					<Divider />
					<Typography
						className={classes.heading}
						{...props}
						variant="h4"
					/>
				</>
			);
		},
		h3(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="h5"
				/>
			);
		},
		h4(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="h6"
				/>
			);
		},
		h5(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="subtitle1"
				/>
			);
		},
		h6(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="subtitle2"
				/>
			);
		},
		p(props) {
			return <Typography {...props} variant="body1" paragraph />;
		},
		a(props) {
			return <Link {...props} className={classes.link} />;
		},
		table(props) {
			return (
				<TableContainer
					style={{
						marginBottom: themeConfig.spacing(3),
					}}
					component={Paper}
				>
					<Table {...props} />
				</TableContainer>
			);
		},
		thead(props) {
			return <TableHead {...props} />;
		},
		tbody(props) {
			return <TableBody {...props} />;
		},
		tr(props) {
			return <TableRow {...props} />;
		},
		th(props) {
			return <TableCell {...props} />;
		},
		td(props) {
			return <TableCell {...props} />;
		},
		code(props) {
			return (
				<SyntaxHighlighter
					language={props.className.replace("language-", "")}
					children={props.children}
					style={
						themeConfig.palette.type === "dark"
							? atomDark
							: materialLight
					}
					className={classes.code}
				/>
			);
		},
	};

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const router = useRouter();
	let title = router.asPath
		.split("/")
		[router.asPath.split("/").length - 1].replace(
			/-(.)/g,
			(e) => ` ${e[1].toUpperCase()}`
		)
		.replace("-", " ");
	if (title) title = title[0].toUpperCase() + title.slice(1);

	return (
		<CookiesProvider>
			<React.Fragment>
				<Head>
					<title>
						{"minehut.xyz" + (title ? " | " + title : "")}
					</title>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width"
					/>
					<script
						src="https://kit.fontawesome.com/9a67ea5597.js"
						crossOrigin="anonymous"
					></script>
				</Head>
				<ThemeProvider theme={themeConfig}>
					<div className={classes.root}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<CustomAppBar
							useDarkMode={useDarkMode}
							appBarTheme={appBarTheme}
							setOpen={setOpen}
							open={open}
							toggleDarkMode={toggleDarkMode}
						/>
						<CustomDrawer open={open} setOpen={setOpen} />
						<main className={classes.content}>
							<Toolbar />
							<Container maxWidth="md">
								<MDXProvider components={components}>
									<Component {...pageProps} />
								</MDXProvider>
							</Container>
						</main>
						<Tooltip title="Join us on Discord!">
							<Fab
								component={Link}
								href="https://discord.gg/bS6FMMCVyg"
								underline="none"
								color="secondary"
								className={classes.discordFab}
								rel="noreferrer"
								target="_blank"
							>
								<i aria-hidden className="fab fa-discord" />
							</Fab>
						</Tooltip>
					</div>
				</ThemeProvider>
			</React.Fragment>
		</CookiesProvider>
	);
}

MinehutXYZ.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

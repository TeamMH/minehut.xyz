import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CustomDrawer from "../src/CustomDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import {
	Button,
	Container,
	Divider,
	Drawer,
	Fab,
	Grid,
	Hidden,
	Link,
	List,
	ListItem,
	ListItemText,
	ListSubheader,
	Paper,
	SvgIcon,
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
import { Alert } from "@material-ui/lab";
import { frontMatter } from "./**/*.md";
import Discord from "../public/discord.svg";
import ScrollSpy from "react-scrollspy";

const themeObject = {
	palette: {
		type: "dark",
		background: {
			default: colors.dark.default,
			paper: colors.dark.default,
		},
		primary: {
			main: "#2196f3",
			light: "#64b5f6",
			dark: "#1976d2",
		},
		secondary: {
			main: "#7289DA",
			light: "#7289DA",
			dark: "#7289DA",
		},
		divider: "rgba(255 255 255 / 12%)",
	},
};

const useStyles = makeStyles((theme) => {
	return {
		root: {
			display: "flex",
			fontSize: "1rem",
			scrollBehavior: "smooth",
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
		heading: {
			margin: theme.spacing(3, 0),
		},
		code: {
			whiteSpace: "pre-line !important",
			"& code": {
				whiteSpace: "pre-line !important",
			},
		},
		toc: {
			"& li": {
				transition: "250ms",
				borderRadius: "5px 0 0 5px",
			},
			"& li.active": {
				borderLeft: "3px solid white",
				background: "rgba(255, 255, 255, .12)",
			},
		},
		drawer: {
			width: 250,
			maxWidth: "100%",
			flexShrink: 0,
		},
		drawerPaper: {
			width: 250,
			maxWidth: "100%",
			background: "none",
			border: "none",
		},
		drawerContainer: {
			overflowY: "auto",
			overflowX: "hidden",
			marginTop: theme.spacing(4),
		},
	};
});

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
					default:
						type === "dark"
							? colors.light.default
							: colors.dark.default,
					paper:
						type === "dark"
							? colors.light.paper
							: colors.dark.paper,
				},
				divider:
					themeObject.palette.type === "dark"
						? "rgba(0, 0, 0, .12)"
						: "rgba(255, 255, 255, .12)",
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
	themeObject.palette.divider =
		themeObject.palette.type === "light"
			? "rgba(0, 0, 0, .12)"
			: "rgba(255, 255, 255, .12)";

	const [theme, toggleDarkMode] = useDarkMode(setCookie);

	const { Component, pageProps } = props;
	const themeConfig = createMuiTheme(theme);

	const [open, setOpen] = React.useState(false);

	const components = {
		h1(props) {
			return (
				<Typography
					className={classes.heading}
					id={getString(props).toLowerCase().replace(/ +/g, "-")}
					{...props}
					variant="h4"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		h2(props) {
			return (
				<>
					<Divider />
					<Typography
						className={classes.heading}
						{...props}
						variant="h5"
						id={getString(props).toLowerCase().replace(/ +/g, "-")}
					>
						{typeof props.children === "string"
							? props.children.toUpperCase()
							: props.children}
					</Typography>
				</>
			);
		},
		h3(props) {
			return (
				<Typography className={classes.heading} {...props} variant="h6">
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		h4(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="subtitle1"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		h5(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="subtitle2"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		h6(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="button"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		p(props) {
			return <Typography {...props} variant="body1" paragraph />;
		},
		a(props) {
			return <Link {...props} />;
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
			return (
				<TableCell
					style={{
						borderBottom:
							"1px solid " +
							(themeConfig.palette.type === "light"
								? "rgba(0, 0, 0, .12)"
								: "rgba(255, 255, 255, .12)"),
					}}
					{...props}
				/>
			);
		},
		td(props) {
			return (
				<TableCell
					style={{
						borderBottom:
							"1px solid " + themeConfig.palette.divider,
					}}
					{...props}
				/>
			);
		},
		code(props) {
			return (
				<SyntaxHighlighter
					language={props.className.replace("language-", "")}
					children={props.children}
					style={
						theme.palette.type === "dark" ? atomDark : materialLight
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

	const fm = frontMatter.find((f) => f.name === router.asPath.slice(1));

	const meta = fm ? (
		<meta content={fm.description} property="og:description" />
	) : null;

	const tableOfContents = fm ? (
		<ScrollSpy
			items={[
				"nothing",
				...fm.contents.map((c) =>
					c
						.replace(/(^|\n)##? /, "")
						.toLowerCase()
						.replace(/ +/g, "-")
				),
			]}
			currentClassName="active"
			offset={-112}
			componentTag={List}
			dense
			className={classes.toc}
		>
			<ListSubheader component="div" disableSticky>
				TABLE OF CONTENTS
			</ListSubheader>
			{fm.contents.map((c, i) => (
				<ListItem
					button
					key={c}
					color="inherit"
					component="li"
					onClick={() =>
						window.scrollTo({
							left: 0,
							top:
								document.getElementById(
									c
										.replace(/(^|\n)##? /, "")
										.toLowerCase()
										.replace(/ +/g, "-")
								).offsetTop - 112,
							behavior: "smooth",
						})
					}
				>
					<ListItemText
						style={{
							marginLeft: themeConfig.spacing(
								c.match(/(^|\n)##/) ? 2 : 0
							),
						}}
					>
						{c.replace(/(^|\n)##? /, "").toUpperCase()}
					</ListItemText>
				</ListItem>
			))}
		</ScrollSpy>
	) : null;

	return (
		<CookiesProvider>
			<React.Fragment>
				<Head>
					<meta
						content={"minehut.xyz" + (title ? " | " + title : "")}
						property="og:title"
					/>
					{meta}
					<meta content="minehut.xyz" property="og:site_name" />
					<meta
						content="https://app.gitbook.com/share/space/thumbnail/-MDvLUELAt3CwagRrh51.png"
						property="og:image"
					/>
					<title>
						{"minehut.xyz" + (title ? " | " + title : "")}
					</title>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width"
					/>
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
							{fm ? (
								<Hidden smUp>
									<Button></Button>
									{tableOfContents}
								</Hidden>
							) : null}
							<Container maxWidth="md">
								<MDXProvider components={components}>
									<Component {...pageProps} />
								</MDXProvider>
								<Alert variant="outlined" severity="success">
									Join our{" "}
									<Link href="https://discord.gg/TYhH5bK">
										Discord
									</Link>{" "}
									to become an{" "}
									<strong>official writer</strong>,{" "}
									<strong>site updates</strong>, and{" "}
									<strong>much more</strong>
								</Alert>
							</Container>
						</main>
						{fm ? (
							<Hidden xsDown>
								<Drawer
									className={classes.drawer}
									variant="permanent"
									classes={{
										paper: classes.drawerPaper,
									}}
									anchor="right"
								>
									<Toolbar />
									{tableOfContents}
								</Drawer>
							</Hidden>
						) : null}
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
								<SvgIcon
									component={Discord}
									viewBox="0 0 245 240"
								/>
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

function getString(props) {
	if (typeof props.children === "string") return props.children;
	else {
		if (Array.isArray(props.children)) {
			let string = props.children
				.map((c) => (typeof c === "string" ? c : getString(c.props)))
				.join("");
		} else return getString(props.children.props);
	}
}

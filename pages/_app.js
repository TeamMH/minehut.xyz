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
	Drawer,
	Fab,
	Hidden,
	IconButton,
	Link,
	Paper,
	SvgIcon,
	SwipeableDrawer,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Tooltip,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import { CookiesProvider, useCookies } from "react-cookie";
import CustomAppBar from "../src/CustomAppBar";
import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	atomDark,
	materialLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import colors from "../colors.json";
import { frontMatter } from "./**/*.md";
import Discord from "../public/discord.svg";
import ContentCopy from "../public/content_copy.svg";
import MenuIcon from "@material-ui/icons/Menu";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import TableOfContents from "../src/TableOfContents";
import routes from "../routes.json";
import Pagination from "../src/Pagination";
import Hint from "../src/Hint";
import NextLink from "../src/Link";
import ScrollTop from "../src/ScrollTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const themeObject = {
	palette: {
		type: "dark",
		background: {
			default: colors.dark.default,
			paper: colors.dark.paper,
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
		divider: "rgba(255, 255, 255, .12)",
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 830,
			lg: 1280,
			xl: 1920,
		},
	},
};

function useStyles(props, theme) {
	return makeStyles(
		(theme) => {
			return {
				"@global": {
					"*::-webkit-scrollbar": {
						width: theme.spacing(1),
						height: theme.spacing(1),
						background: "rgba(0, 0, 0, .15)",
					},
					"*::-webkit-scrollbar-thumb": {
						background:
							theme.palette.type === "dark"
								? "rgb(16, 19, 23)"
								: colors.dark.paper,
						borderRadius: theme.shape.borderRadius,
					},
				},
				root: {
					display: "flex",
					fontSize: "1rem",
					scrollBehavior: "smooth",
				},
				content: {
					flexGrow: 1,
					padding: theme.spacing(3, 0),
					[theme.breakpoints.up("lg")]: {
						maxWidth: (props) =>
							props.fm ? "calc(100% - 550px)" : "100%",
					},
					[theme.breakpoints.only("md")]: {
						maxWidth: (props) =>
							props.fm ? "calc(100% - 250px)" : "100%",
					},
					[theme.breakpoints.down("sm")]: {
						maxWidth: "100%",
					},
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
					zIndex: 1300,
				},
				tocFab: {
					position: "fixed",
					bottom: theme.spacing(10),
					right: theme.spacing(2),
					fontSize: 26,
					color: "white",
					zIndex: 1300,
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
				code: {
					borderRadius: theme.shape.borderRadius,
					boxShadow: theme.shadows[2],
				},
				drawer: {
					[theme.breakpoints.down("sm")]: {
						width: "100%",
					},
					width: 250,
					maxWidth: "100%",
					flexShrink: 0,
				},
				drawerPaper: {
					[theme.breakpoints.down("sm")]: {
						width: 300,
					},
					width: 250,
					maxWidth: "100%",
					[theme.breakpoints.up("md")]: {
						background: "none",
						border: "none",
					},
				},
				drawerContainer: {
					overflowY: "auto",
					overflowX: "hidden",
					marginTop: theme.spacing(4),
				},
				tableContainer: {
					marginBottom: theme.spacing(3),
				},
				tableHeading: {
					borderBottom:
						"2px solid " + theme.palette.divider + " !important",
				},
				tableCell: {
					borderBottom: "1px solid " + theme.palette.divider,
				},
				inlineCode: {
					background:
						theme.palette.type === "dark"
							? "rgb(43, 47, 51)"
							: "rgb(250, 250, 250)",
					padding: 3,
					borderRadius: theme.shape.borderRadius,
					boxShadow: theme.shadows[1],
				},
				img: {
					margin: theme.spacing(2) + "px auto 0 auto",
					display: "block",
					maxWidth: "100%",
					height: "auto",
					borderRadius: theme.shape.borderRadius,
					boxShadow: theme.shadows[2],
					background: "white",
				},
				buttonSingleLine: {
					position: "absolute",
					right: 5,
					top: "50%",
					transform: "translateY(-50%)",
					zIndex: 10,
				},
				buttonMultiLine: {
					position: "absolute",
					top: 5,
					right: 5,
					zIndex: 10,
				},
				paragraph: {
					lineHeight: 1.625,
					marginTop: theme.spacing(2),
				},
				list: {
					lineHeight: 1.625,
				},
				linkCopyButton: {
					display: "inline-block",
					height: "100%",
					width: "auto",
					position: "relative",
					bottom: 4,
					left: 8,
					margin: "-12px 0",
				},
			};
		},
		{ defaultTheme: theme }
	)(props);
}

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
	const [cookies, setCookie] = useCookies(["theme"]);
	if (!cookies.theme) setCookie("theme", "light");
	themeObject.palette.type = cookies.theme || "light";
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

	const router = useRouter();

	const fm = frontMatter.find((f) =>
		f ? f.name === router.pathname.slice(1) : null
	);

	const classes = useStyles({ fm }, themeConfig);

	const [open, setOpen] = React.useState(false);

	const components = {
		h1(props) {
			return (
				<>
					<Typography
						className={classes.heading}
						id={
							"h1-" +
							getString(props).toLowerCase().replace(/ +/g, "-")
						}
						{...props}
						variant="h4"
						component="h1"
					>
						{typeof props.children === "string"
							? props.children.toUpperCase()
							: props.children}
						<Tooltip title="Copy heading link">
							<IconButton
								className={classes.linkCopyButton}
								onClick={() => {
									const url = `${router.pathname}?scrollTo=${
										"h1-" +
										getString(props)
											.toLowerCase()
											.replace(/ +/g, "-")
									}`;
									router.replace(url);
									copyToClipboard(window.location.host + url);
								}}
								centerRipple={false}
							>
								<InsertLinkIcon />
							</IconButton>
						</Tooltip>
					</Typography>
					<Typography color="textSecondary" paragraph>
						{fm ? fm.description : null}
					</Typography>
					<Divider />
					{fm && fm.madeBy ? (
						<Hint style="info">
							This tutorial was made by {getMadeBy(fm)}. Lean how
							to contribute{" "}
							<NextLink href="/contribute">here</NextLink>.
						</Hint>
					) : null}
				</>
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
						id={
							"h2-" +
							getString(props).toLowerCase().replace(/ +/g, "-")
						}
						component="h2"
					>
						{typeof props.children === "string"
							? props.children.toUpperCase()
							: props.children}
						<Tooltip title="Copy heading link">
							<IconButton
								className={classes.linkCopyButton}
								onClick={() => {
									const url = `${router.pathname}?scrollTo=${
										"h1-" +
										getString(props)
											.toLowerCase()
											.replace(/ +/g, "-")
									}`;
									router.replace(url);
									copyToClipboard(window.location.host + url);
								}}
								centerRipple={false}
							>
								<InsertLinkIcon />
							</IconButton>
						</Tooltip>
					</Typography>
				</>
			);
		},
		h3(props) {
			return (
				<Typography
					id={
						"h3-" +
						getString(props).toLowerCase().replace(/ +/g, "-")
					}
					className={classes.heading}
					{...props}
					variant="h6"
					component="h3"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
					<Tooltip title="Copy heading link">
						<IconButton
							className={classes.linkCopyButton}
							onClick={() => {
								const url = `${router.pathname}?scrollTo=${
									"h1-" +
									getString(props)
										.toLowerCase()
										.replace(/ +/g, "-")
								}`;
								router.replace(url);
								copyToClipboard(window.location.host + url);
							}}
							centerRipple={false}
						>
							<InsertLinkIcon />
						</IconButton>
					</Tooltip>
				</Typography>
			);
		},
		h4(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="subtitle1"
					component="h4"
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
					component="h5"
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
					component="h6"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		p(props) {
			return (
				<Typography
					className={classes.paragraph}
					{...props}
					variant="body1"
					paragraph
				/>
			);
		},
		a(props) {
			if (props.href && props.href.match(/^https?:\/\//))
				return <Link target="_blank" {...props} />;
			else return <NextLink {...props} />;
		},
		table(props) {
			return (
				<TableContainer
					className={classes.tableContainer}
					component={Paper}
					elevation={2}
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
					className={classes.tableCell + " " + classes.tableHeading}
					{...props}
				/>
			);
		},
		td(props) {
			return <TableCell className={classes.tableCell} {...props} />;
		},
		code(props) {
			const numberOfLines = props.children.replace(/\n$/, "").split("\n")
				.length;
			return (
				<div style={{ position: "relative" }}>
					<Tooltip title="Copy code to clipboard">
						<IconButton
							centerRipple={false}
							classes={{
								root:
									numberOfLines === 1
										? classes.buttonSingleLine
										: classes.buttonMultiLine,
							}}
							onClick={(e) =>
								copyToClipboard(
									props.children.replace(/\n$/, "")
								)
							}
						>
							<SvgIcon
								component={ContentCopy}
								viewBox="0 0 24 24"
							/>
						</IconButton>
					</Tooltip>
					<SyntaxHighlighter
						showLineNumbers
						wrapLines
						//wrapLongLines
						language={
							props.className
								? props.className.replace("language-", "")
								: null
						}
						style={
							theme.palette.type === "dark"
								? atomDark
								: materialLight
						}
						className={classes.code}
					>
						{props.children.replace(/\n$/, "")}
					</SyntaxHighlighter>
				</div>
			);
		},
		inlineCode(props) {
			return <code {...props} className={classes.inlineCode} />;
		},
		img(props) {
			return <img {...props} className={classes.img} />;
		},
		li(props) {
			return <li {...props} className={classes.list} />;
		},
	};

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const loaded = useLoaded();

	const [tocOpen, setTocOpen] = React.useState(false);

	const meta = fm ? (
		<meta content={fm.description} property="og:description" />
	) : null;

	if (router.pathname === "plugins/plugin-list")
		meta = (
			<meta
				content="Look up all available plugins on Minehut!"
				property="og:description"
			/>
		);

	function routesArray(routes) {
		const array = [];
		Object.keys(routes).forEach((route) => {
			if (route === "__dirroute__") return;
			if (typeof routes[route] === "string")
				array.push([route, routes[route]]);
			else array.push(...routesArray(routes[route]));
		});
		return array;
	}

	const rArray = routesArray(routes);
	const current = rArray.findIndex((r) => r[1] === router.pathname);

	let title = rArray.find((r) => r[1] === router.pathname)
		? router.pathname
				.split("/")
				[router.pathname.split("/").length - 1].replace(
					/-(.)/g,
					(e) => ` ${e[1].toUpperCase()}`
				)
				.replace("-", " ")
		: "404 Not Found";
	if (title) title = title[0].toUpperCase() + title.slice(1);

	const matches = useMediaQuery(themeConfig.breakpoints.up("sm"));

	React.useEffect(() => {
		if (router.query.scrollTo) {
			const el = document.getElementById(router.query.scrollTo);
			if (el)
				window.scrollTo({
					top: el.offsetTop - (matches ? 112 : 160),
					left: 0,
					behavior: "smooth",
				});
		}
	}, [router]);

	return (
		<CookiesProvider>
			<React.Fragment>
				<Head>
					<meta
						content={(title || "Home") + " | minehut.xyz"}
						property="og:title"
					/>
					{meta}
					<title>{(title || "Home") + " | minehut.xyz"}</title>
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
							themeConfig={themeConfig}
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
								<Hidden smUp>
									<Toolbar />
								</Hidden>
								{loaded ? (
									<MDXProvider
										components={components}
										style={{
											marginBottom: themeConfig.spacing(
												2
											),
										}}
									>
										<Component {...pageProps} />
									</MDXProvider>
								) : null}
								<Hint
									disableMargin
									variant="outlined"
									severity="success"
								>
									Join our{" "}
									<Link href="https://discord.gg/TYhH5bK">
										Discord
									</Link>{" "}
									to become an{" "}
									<strong>official writer</strong>, get{" "}
									<strong>site updates</strong>, and{" "}
									<strong>much more</strong>
								</Hint>
								{current !== -1 ? (
									<Pagination
										current={current}
										rArray={rArray}
									/>
								) : null}
							</Container>
						</main>
						{fm ? (
							<>
								<Hidden smDown>
									<Drawer
										className={classes.drawer}
										variant="permanent"
										classes={{
											paper: classes.drawerPaper,
										}}
										anchor="right"
									>
										<Toolbar />
										<TableOfContents
											contents={fm.contents}
											tocOpen={tocOpen}
											setTocOpen={setTocOpen}
										/>
									</Drawer>
								</Hidden>
								<Hidden mdUp>
									<SwipeableDrawer
										className={classes.drawer}
										variant="temporary"
										classes={{
											paper: classes.drawerPaper,
										}}
										anchor="right"
										open={tocOpen}
										onClose={() => setTocOpen(false)}
										onOpen={() => setTocOpen(true)}
									>
										<Toolbar />
										<TableOfContents
											contents={fm.contents}
											tocOpen={tocOpen}
											setTocOpen={setTocOpen}
										/>
									</SwipeableDrawer>
								</Hidden>
							</>
						) : null}
						{fm ? (
							<Hidden mdUp>
								<Tooltip title="Table of contents">
									<Fab
										className={classes.tocFab}
										onClick={() => setTocOpen(!tocOpen)}
										color="primary"
									>
										<MenuIcon />
									</Fab>
								</Tooltip>
							</Hidden>
						) : null}
						<ScrollTop>
							<Tooltip title="Back to top">
								<Fab color="primary">
									<KeyboardArrowUpIcon />
								</Fab>
							</Tooltip>
						</ScrollTop>
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
			return props.children
				.map((c) => (typeof c === "string" ? c : getString(c.props)))
				.join("");
		} else return getString(props.children.props);
	}
}

function useLoaded() {
	const [loaded, setLoaded] = React.useState(false);
	React.useEffect(() => setLoaded(true), []);
	return loaded;
}

function getMadeBy(fm) {
	if (typeof fm.madeBy === "string")
		return fm.madeByLink ? (
			fm.madeByLink.match(/^https?:\/\//) ? (
				<Link href={fm.madeByLink}>{fm.madeBy}</Link>
			) : (
				<NextLink href={fm.madeByLink}>{fm.madeBy}</NextLink>
			)
		) : (
			fm.madeBy
		);
	else if (Array.isArray(fm.madeBy)) {
		const array = fm.madeBy.map((author, i) =>
			fm.madeByLink[i] ? (
				fm.madeByLink[i].match(/^https?:\/\//) ? (
					<Link key={author} href={fm.madeByLink[i]}>
						{author}
					</Link>
				) : (
					<NextLink key={author} href={fm.madeByLink[i]}>
						{author}
					</NextLink>
				)
			) : (
				fm.madeBy
			)
		);

		return (
			<>
				{array.length > 2
					? array.slice(0, array.length - 2).map((el) => <>{el}, </>)
					: null}
				{array[array.length - 2]} and {array[array.length - 1]}
			</>
		);
	}
}

function copyToClipboard(text) {
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

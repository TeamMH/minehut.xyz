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
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Container,
	Divider,
	Drawer,
	Fab,
	Grid,
	Hidden,
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
import MenuIcon from "@material-ui/icons/Menu";
import TableOfContents from "../src/TableOfContents";
import routes from "../routes.json";
import NextLink from "../src/Link";

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

function useStyles(theme) {
	return makeStyles(
		(theme) => {
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
				tocFab: {
					position: "fixed",
					bottom: theme.spacing(10),
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
				tableCell: {
					borderBottom:
						"1px solid " +
						(theme.palette.type === "light"
							? "rgba(0, 0, 0, .12)"
							: "rgba(255, 255, 255, .12)"),
				},
				inlineCode: {
					background:
						theme.palette.type === "dark"
							? "rgb(29, 31, 33)"
							: "rgb(250, 250, 250)",
					padding: 3,
					borderRadius: 5,
				},
				navGrid: {
					marginTop: theme.spacing(2),
				},
			};
		},
		{ defaultTheme: theme }
	)();
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
	const classes = useStyles(themeConfig);

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
					className={classes.tableContainer}
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
			return <TableCell className={classes.tableCell} {...props} />;
		},
		td(props) {
			return <TableCell className={classes.tableCell} {...props} />;
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
		inlineCode(props) {
			return <code {...props} className={classes.inlineCode} />;
		},
	};

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const router = useRouter();

	const fm = frontMatter.find((f) => f.name === router.asPath.slice(1));

	const meta = fm ? (
		<meta content={fm.description} property="og:description" />
	) : null;

	const loaded = useLoaded();

	const [tocOpen, setTocOpen] = React.useState(false);

	function routesArray(routes) {
		const array = [];
		Object.keys(routes).forEach((route) => {
			if (typeof routes[route] === "string")
				array.push([route, routes[route]]);
			else array.push(...routesArray(routes[route]));
		});
		return array;
	}

	const rArray = routesArray(routes);
	const current = rArray.findIndex((r) => r[1] === router.asPath);

	let title = rArray.find((r) => r[1] === router.asPath)
		? router.asPath
				.split("/")
				[router.asPath.split("/").length - 1].replace(
					/-(.)/g,
					(e) => ` ${e[1].toUpperCase()}`
				)
				.replace("-", " ")
		: "404 Not Found";
	if (title) title = title[0].toUpperCase() + title.slice(1);

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
							{fm ? (
								<Hidden mdUp>
									<Fab
										className={classes.tocFab}
										onClick={() => setTocOpen(!tocOpen)}
										color="primary"
									>
										<MenuIcon />
									</Fab>
								</Hidden>
							) : null}
							<Container maxWidth="md">
								{loaded ? (
									<MDXProvider components={components}>
										<Component {...pageProps} />
									</MDXProvider>
								) : null}
								<Alert variant="outlined" severity="success">
									Join our{" "}
									<Link href="https://discord.gg/TYhH5bK">
										Discord
									</Link>{" "}
									to become an{" "}
									<strong>official writer</strong>, get{" "}
									<strong>site updates</strong>, and{" "}
									<strong>much more</strong>
								</Alert>
								{current !== -1 ? (
									<Grid
										spacing={3}
										className={classes.navGrid}
										container
									>
										{current ? (
											<Grid
												xs={12}
												sm={
													current + 1 < rArray.length
														? 6
														: 12
												}
												item
											>
												<Card>
													<CardActionArea
														naked
														component={NextLink}
														href={
															rArray[
																current - 1
															][1]
														}
													>
														<CardContent>
															<Typography
																variant="subtitle1"
																color="textSecondary"
															>
																Previous
															</Typography>
															<Typography variant="h5">
																{
																	rArray[
																		current -
																			1
																	][0]
																}
															</Typography>
															<Typography
																variant="subtitle2"
																color="textSecondary"
																display="inline"
															>
																{rArray[
																	current - 1
																][1].split("/")
																	.length >= 3
																	? rArray[
																			current -
																				1
																	  ][1]
																			.split(
																				"/"
																			)[1]
																			.replace(
																				/-./g,
																				(
																					e
																				) =>
																					" " +
																					e[1].toUpperCase()
																			)
																			.split(
																				""
																			)
																			.map(
																				(
																					c,
																					i
																				) =>
																					i ===
																					0
																						? c.toUpperCase()
																						: c
																			)
																			.join(
																				""
																			)
																	: null}
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Grid>
										) : null}
										{current + 1 < rArray.length ? (
											<Grid
												xs={12}
												sm={current ? 6 : 12}
												item
											>
												<Card>
													<CardActionArea
														component={NextLink}
														naked
														href={
															rArray[
																current + 1
															][1]
														}
													>
														<CardContent>
															<Typography
																variant="subtitle1"
																style={{
																	color:
																		"#aaaaaa",
																}}
															>
																Next Up
															</Typography>
															<Typography variant="h5">
																{
																	rArray[
																		current +
																			1
																	][0]
																}
															</Typography>
															<Typography
																variant="subtitle2"
																color="textSecondary"
																display="inline"
															>
																{rArray[
																	current + 1
																][1].split("/")
																	.length >= 3
																	? rArray[
																			current +
																				1
																	  ][1]
																			.split(
																				"/"
																			)[1]
																			.replace(
																				/-./g,
																				(
																					e
																				) =>
																					" " +
																					e[1].toUpperCase()
																			)
																			.split(
																				""
																			)
																			.map(
																				(
																					c,
																					i
																				) =>
																					i ===
																					0
																						? c.toUpperCase()
																						: c
																			)
																			.join(
																				""
																			)
																	: null}
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Grid>
										) : null}
									</Grid>
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

function useLoaded() {
	const [loaded, setLoaded] = React.useState(false);
	React.useEffect(() => setLoaded(true), []);
	return loaded;
}

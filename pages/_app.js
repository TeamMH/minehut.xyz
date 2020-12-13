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
	Backdrop,
	Button,
	Container,
	Divider,
	Drawer,
	Fab,
	Grid,
	Hidden,
	IconButton,
	Link,
	NoSsr,
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
import { useCookies } from "react-cookie";
import CustomAppBar from "../src/CustomAppBar";
import { MDXProvider } from "@mdx-js/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	atomDark,
	materialLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import colors from "../colors.json";
import { frontMatter } from "./**/*.md";
import { frontMatter as homeFm } from "../home.md";
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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import { Footer } from "../src/Footer";
import {
	copyToClipboard,
	kebabToStartCase,
	overrideRouteNames,
	routesArray,
} from "../lib/utils";
import { GitHub } from "@material-ui/icons";
import HomeScrollTop from "../src/HomeScrollTop";

export const themeObject = {
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
		divider: "rgba(255, 255, 255, .12)",
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 830,
			lg: 1280,
			xl: 1980,
		},
	},
	typography: {
		body1: {
			lineHeight: 1.625,
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
					minHeight: "100vh",
				},
				content: {
					paddingTop: theme.spacing(3),
					paddingBottom: theme.spacing(3),
				},
				navTheme: {
					marginRight: theme.spacing(1),
				},
				fab2: {
					position: "fixed",
					bottom: theme.spacing(10),
					right: theme.spacing(2),
					zIndex: 1300,
					background: theme.palette.background.paper,
					color: theme.palette.text.primary,
					"&:hover": {
						background: theme.palette.background.default,
					},
				},
				fab: {
					position: "fixed",
					bottom: theme.spacing(2),
					right: theme.spacing(2),
					fontSize: 26,
					color: "white",
					zIndex: 1300,
				},
				discord: {
					background: "#7289DA",
					"&:hover": {
						background: "#5f72b6",
					},
				},
				heading: {
					margin: theme.spacing(3, 0),
					whiteSpace: "pre-wrap !important",
					overflowWrap: "anywhere",
					wordBreak: "break-word",
					position: "relative",
					textTransform: "uppercase",
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
					width: "100%",
					height: "100%",
				},
				drawerPaper: {
					width: 300,
					maxWidth: "100%",
					[theme.breakpoints.only("md")]: {
						width: "25%",
					},
					[theme.breakpoints.up("md")]: {
						background: "none",
						border: "none",
					},
					[theme.breakpoints.up("lg")]: {
						width: "16.6666667%",
					},
				},
				drawerContainer: {
					overflowY: "auto",
					overflowX: "hidden",
					marginTop: theme.spacing(4),
				},
				tableContainer: {
					marginBottom: theme.spacing(2),
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
					marginTop: theme.spacing(2),
				},
				linkCopyButton: {
					display: "inline-block",
					height: "100%",
					width: "auto",
					position: "relative",
					bottom: 4,
					left: 8,
					margin: "-10px 0",
				},
				backdrop: {
					zIndex: theme.zIndex.drawer + 1,
				},
				dialAction: {
					width: 130,
				},
				githubButton: {
					marginBottom: theme.spacing(2),
					[theme.breakpoints.up("sm")]: {
						float: "right",
					},
					zIndex: "1",
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

	const isHome = router.pathname === "/";

	let fm = frontMatter.find((f) =>
		f ? f.name === router.pathname.slice(1) : null
	);

	if (isHome) fm = homeFm;

	const classes = useStyles({ fm }, themeConfig);

	const [open, setOpen] = React.useState(false);

	const components = {
		h1(props) {
			return (
				<>
					<Hidden xsDown>
						<Button
							href={getHref(router.pathname)}
							target="_blank"
							className={classes.githubButton}
							variant="contained"
							startIcon={<GitHub />}
							color="primary"
						>
							Edit this page on GitHub
						</Button>
					</Hidden>
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
						{props.children}
						<Tooltip title="Copy heading link">
							<IconButton
								className={classes.linkCopyButton}
								onClick={() => {
									const { query } = router;
									router
										.replace({
											query: {
												...query,
												scrollTo:
													"h1-" +
													getString(props)
														.toLowerCase()
														.replace(/ +/g, "-"),
											},
										})
										.then(() =>
											copyToClipboard(
												window.location.href
											)
										);
								}}
								centerRipple={false}
							>
								<InsertLinkIcon />
							</IconButton>
						</Tooltip>
					</Typography>
					<Hidden smUp>
						<Button
							href={getHref(router.pathname)}
							target="_blank"
							className={classes.githubButton}
							variant="contained"
							startIcon={<GitHub />}
							color="primary"
						>
							Edit this page on GitHub
						</Button>
					</Hidden>
					<Typography color="textSecondary" paragraph>
						{fm ? fm.description : null}
					</Typography>

					<Divider />
					{fm && fm.madeBy ? (
						<Hint style="info">
							This tutorial was made by {getMadeBy(fm)}. Lean how
							to contribute{" "}
							<NextLink target="_blank" href="/contribute">
								here
							</NextLink>
							.
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
						{props.children}
						<Tooltip title="Copy heading link">
							<IconButton
								className={classes.linkCopyButton}
								onClick={() => {
									const { query } = router;
									router
										.replace({
											query: {
												...query,
												scrollTo:
													"h2-" +
													getString(props)
														.toLowerCase()
														.replace(/ +/g, "-"),
											},
										})
										.then(() =>
											copyToClipboard(
												window.location.href
											)
										);
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
					{props.children}
					<Tooltip title="Copy heading link">
						<IconButton
							className={classes.linkCopyButton}
							onClick={() => {
								const { query } = router;
								router
									.replace({
										query: {
											...query,
											scrollTo:
												"h3-" +
												getString(props)
													.toLowerCase()
													.replace(/ +/g, "-"),
										},
									})
									.then(() =>
										copyToClipboard(window.location.href)
									);
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
			return <Typography component="li" {...props} />;
		},
	};

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const [tocOpen, setTocOpen] = React.useState(false);

	let meta = fm ? (
		<meta content={fm.description} property="og:description" />
	) : null;

	if (router.pathname === "/plugins/plugin-list")
		meta = (
			<meta
				content="Look up all available plugins on Minehut!"
				property="og:description"
			/>
		);
	else if (router.pathname === "/search")
		meta = (
			<meta
				content="Search for something on minehut.xyz"
				property="og:description"
			/>
		);

	const rArray = routesArray(routes);
	const current = rArray.findIndex((r) => r[1] === router.pathname);

	let title = rArray.find((r) => r[1] === router.pathname)
		? overrideRouteNames(
				kebabToStartCase(router.pathname.split("/").reverse()[0])
		  )
		: router.pathname === "/search"
		? "Search" + (router.query.q ? ": " + router.query.q : "")
		: "404 Not Found";

	const [query, setQuery] = React.useState("");

	React.useEffect(() => {
		if (router.query.scrollTo && router.query.scrollTo !== query) {
			setQuery(router.query.scrollTo);
			const el = document.getElementById(router.query.scrollTo);
			if (el)
				window.scrollTo({
					top: el.offsetTop - 112,
					left: 0,
					behavior: "smooth",
				});
		}
	}, [router]);

	const [speedDialOpen, setSpeedDialOpen] = React.useState(false);

	const speedDialHandleClose = () => setSpeedDialOpen(false);

	const speedDialHandleOpen = () => setSpeedDialOpen(true);

	return (
		<React.Fragment>
			<Head>
				<meta
					content={
						(title || "Home") +
						(router.pathname.split("/").length > 2
							? " | " +
							  router.pathname
									.split("/")
									.slice(1)
									.reverse()
									.slice(1)
									.reverse()
									.map((name) =>
										overrideRouteNames(
											kebabToStartCase(name)
										)
									)
									.join(" > ")
							: "")
					}
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
				<Grid container className={classes.root}>
					<CssBaseline />
					<CustomAppBar
						themeConfig={themeConfig}
						useDarkMode={useDarkMode}
						appBarTheme={appBarTheme}
						setOpen={setOpen}
						open={open}
						toggleDarkMode={toggleDarkMode}
					/>
					<Grid item lg={2}>
						<CustomDrawer open={open} setOpen={setOpen} />
					</Grid>
					<Grid item xs={12} md={fm ? 9 : 12} lg={fm ? 8 : 10}>
						{!isHome ? <Toolbar /> : null}
						{isHome ? (
							<NoSsr>
								<div
									style={{
										marginBottom: themeConfig.spacing(1),
									}}
								>
									<MDXProvider components={components}>
										<Component {...pageProps} />
									</MDXProvider>
								</div>
							</NoSsr>
						) : null}
						<Container maxWidth="md" className={classes.content}>
							{!isHome ? (
								<NoSsr>
									<div
										style={{
											marginBottom: themeConfig.spacing(
												1
											),
										}}
									>
										<MDXProvider components={components}>
											<Component {...pageProps} />
										</MDXProvider>
									</div>
								</NoSsr>
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
								to become an <strong>official writer</strong>,
								get <strong>site updates</strong>, and{" "}
								<strong>much more</strong>.
							</Hint>
							{current !== -1 ? (
								<Pagination current={current} rArray={rArray} />
							) : null}
						</Container>
					</Grid>
					{isHome ? (
						<HomeScrollTop>
							<Hidden smDown>
								<Fab color="primary">
									<KeyboardArrowDownIcon />
								</Fab>
							</Hidden>
							<Hidden mdUp>
								<Fab color="primary" size="medium">
									<KeyboardArrowDownIcon />
								</Fab>
							</Hidden>
						</HomeScrollTop>
					) : null}
					{fm ? (
						<Grid item md={3} lg={2}>
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
						</Grid>
					) : null}
					<Grid item lg={!isHome ? 2 : "auto"} />
					<Grid item xs={12} lg={!isHome ? 10 : 12}>
						<Footer />
					</Grid>
					<Hidden smDown>
						<ScrollTop>
							<Tooltip title="Back to top">
								<Fab color="secondary">
									<KeyboardArrowUpIcon />
								</Fab>
							</Tooltip>
						</ScrollTop>
						<Tooltip title="GitHub">
							<Fab
								component={Link}
								href="https://github.com/TeamMH/minehut.xyz"
								underline="none"
								className={classes.fab2}
								rel="noreferrer"
								target="_blank"
							>
								<GitHub />
							</Fab>
						</Tooltip>
						<Tooltip title="Join us on Discord!">
							<Fab
								component={Link}
								href="https://discord.gg/bS6FMMCVyg"
								underline="none"
								className={`${classes.fab} ${classes.discord}`}
								rel="noreferrer"
								target="_blank"
							>
								<SvgIcon
									component={Discord}
									viewBox="0 0 245 240"
								/>
							</Fab>
						</Tooltip>
					</Hidden>
					<Hidden mdUp>
						<Backdrop
							open={speedDialOpen}
							className={classes.backdrop}
						/>
						<SpeedDial
							ariaLabel="mobile speed dial"
							className={classes.fab}
							icon={<SpeedDialIcon />}
							onClose={speedDialHandleClose}
							onOpen={speedDialHandleOpen}
							open={speedDialOpen}
							FabProps={{
								size: "medium",
								color: "secondary",
							}}
						>
							<SpeedDialAction
								onClick={speedDialHandleClose}
								tooltipOpen
								tooltipTitle="Discord"
								FabProps={{
									component: Link,
									href: "https://discord.gg/bS6FMMCVyg",
									target: "_blank",
								}}
								icon={
									<SvgIcon
										viewBox="0 0 245 240"
										component={Discord}
									/>
								}
								classes={{
									staticTooltipLabel: classes.dialAction,
								}}
							/>
							<SpeedDialAction
								onClick={speedDialHandleClose}
								tooltipOpen
								tooltipTitle="GitHub"
								FabProps={{
									component: Link,
									href:
										"https://github.com/TeamMH/minehut.xyz",
									target: "_blank",
								}}
								icon={<GitHub />}
								classes={{
									staticTooltipLabel: classes.dialAction,
								}}
							/>
							{fm && fm.description ? (
								<SpeedDialAction
									onClick={speedDialHandleClose}
									tooltipOpen
									tooltipTitle="Table of contents"
									FabProps={{
										onClick: () => setTocOpen(!tocOpen),
									}}
									icon={<MenuIcon />}
									classes={{
										staticTooltipLabel: classes.dialAction,
									}}
								/>
							) : null}
							<SpeedDialAction
								onClick={() => {
									speedDialHandleClose();
									window.scrollTo({
										top: 0,
										left: 0,
										behavior: "smooth",
									});
								}}
								tooltipOpen
								tooltipTitle="Back to top"
								icon={<KeyboardArrowUpIcon />}
								classes={{
									staticTooltipLabel: classes.dialAction,
								}}
							/>
						</SpeedDial>
					</Hidden>
				</Grid>
			</ThemeProvider>
		</React.Fragment>
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

function getHref(pathname) {
	const githubUrl = "https://github.com/TeamMH/minehut.xyz";
	const branch = "main";

	if (pathname === "/") pathname = "/index";

	pathname +=
		pathname !== "/search" && pathname !== "/plugins/plugin-list"
			? ".md"
			: ".js";

	return `${githubUrl}/tree/${branch}/pages${pathname}`;
}

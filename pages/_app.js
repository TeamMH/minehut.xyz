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
	Fab,
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
} from "@material-ui/core";
import { useCookies } from "react-cookie";
import CustomAppBar from "../src/CustomAppBar";
import colors from "../colors.json";
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
	firebaseConfig,
	kebabToStartCase,
	overrideRouteNames,
	routesArray,
	useComponents,
} from "../lib/utils";
import { GitHub } from "@material-ui/icons";
import HomeScrollTop from "../src/HomeScrollTop";
import Banner from "../src/Banner";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import hiddenRoutes from "../hiddenRoutes.json";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import { MDXProvider } from "@mdx-js/react";

export const themeTemplate = {
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
					display: "flex",
					flexWrap: "wrap",
				},
				main: {
					flexBasis: (props) =>
						props.isHome ? "100%" : "calc(100% - 300px)",
					[theme.breakpoints.down("md")]: {
						flexBasis: "100% !important",
					},
					maxWidth: "100%",
				},
				content: {
					maxWidth: (props) =>
						props.isHome
							? "calc(100% - 600px)"
							: // : props.fm && !props.fm.hidden
							  // ? "calc(100% - 300px)"
							  "100%",
					marginLeft: (props) => (props.isHome ? 300 : 0),
					[theme.breakpoints.down("md")]: {
						maxWidth:
							// props.fm && !props.fm.hidden
							// 	? "calc(100% - 300px) !important"
							/*:*/ "100%",
						marginLeft: "0 !important",
					},
					[theme.breakpoints.down("sm")]: {
						maxWidth: "100% !important",
					},
					margin: theme.spacing(3, 0),
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

				drawer: {
					width: 300,
					height: "fit-content",
					maxHeight: "100vh",
					overflowY: "auto",
					position: "sticky",
					right: 0,
					top: 0,
					float: "right",
				},
				drawerPaper: {
					width: 300,
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
				backdrop: {
					zIndex: theme.zIndex.drawer + 1,
				},
				dialAction: {
					width: 130,
				},
				empty: {
					flexBasis: 300,
					maxWidth: 300,
					[theme.breakpoints.down("md")]: {
						flexBasis: 0,
						maxWidth: 0,
					},
				},
			};
		},
		{ defaultTheme: theme }
	)(props);
}

const useDarkMode = (setCookie) => {
	const [theme, setTheme] = React.useState(themeTemplate);

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
					type === "dark"
						? "rgba(0, 0, 0, .12)"
						: "rgba(255, 255, 255, .12)",
			},
		};
		setCookie("theme", type === "dark" ? "light" : "dark");
		setTheme(updatedTheme);
	};
	return [theme, toggleDarkMode];
};

const appBarTheme = createMuiTheme(themeTemplate);

export default function MinehutXYZ(props) {
	const [cookies, setCookie] = useCookies(["theme"]);
	if (!cookies.theme) setCookie("theme", "dark");

	const themeObject = themeTemplate;

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

	const router = useRouter();

	let isHome = router.pathname === "/";

	// const rArray = routesArray(routes, frontMatter);

	// let title =
	// 	hiddenRoutes[router.pathname] ||
	// 	(rArray.find((r) => r[1] === router.pathname)
	// 		? overrideRouteNames(
	// 				kebabToStartCase(router.pathname.split("/").reverse()[0])
	// 		  )
	// 		: "404 Not Found");
	const classes = useStyles({ /*fm,*/ isHome /*hideDrawer*/ }, themeConfig);

	const [open, setOpen] = React.useState(false);

	const [initialized, setInitialized] = React.useState(false);

	React.useEffect(() => {
		if (
			typeof window === "undefined" ||
			typeof window.firebase === "undefined"
		)
			return;
		if (initialized) return;

		window.firebase.initializeApp(firebaseConfig);
		window.firebase.analytics();
		setInitialized(true);
	});

	// if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
	// const storage = firebase.storage();
	// const storageRef = storage.ref();
	// if (typeof window !== "undefined")
	// 	storageRef.listAll().then((res) => {
	// 		res.items.forEach((ref) => {
	// 			console.log(ref.name);
	// 		});
	// 	});

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	// const [tocOpen, setTocOpen] = React.useState(false);

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

	const speedDialHandleClose = () => {
		setSpeedDialOpen(false);
	};

	const speedDialHandleOpen = () => {
		setSpeedDialOpen(true);
	};

	const components = useComponents();

	return (
		<React.Fragment>
			<Head>
				{/* <meta
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
				/> */}
			</Head>
			<FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
				<ThemeProvider theme={themeConfig}>
					<div className={classes.root}>
						<CssBaseline />
						<CustomAppBar
							themeConfig={themeConfig}
							useDarkMode={useDarkMode}
							appBarTheme={appBarTheme}
							setOpen={setOpen}
							open={open}
							toggleDarkMode={toggleDarkMode}
							// hideAppBar={hideAppBar}
						/>
						<CustomDrawer
							open={open}
							setOpen={setOpen}
							// hideDrawer={hideDrawer}
						/>
						<main className={classes.main}>
							<NoSsr>
								{isHome ? <Banner /> : null}
								{/* {fm && !fm.hidden ? (
									<Hidden smDown>
										<div
											className={classes.drawer}
											variant="permanent"
											anchor="right"
										>
											<Paper
												className={classes.drawerPaper}
												elevation={0}
											>
												<Toolbar />
												<TableOfContents
													contents={fm.contents}
													tocOpen={tocOpen}
													setTocOpen={setTocOpen}
												/>
											</Paper>
										</div>
									</Hidden>
								) : null} */}
								<div className={classes.content}>
									{/* {!hideAppBar ? <Toolbar /> : null} */}
									<Toolbar />
									<Container
										// maxWidth={
										// 	title === "Login" ||
										// 	title === "Sign Up"
										// 		? "xs"
										// 		: "md"
										// }
										maxWidth="md"
									>
										<div
											style={{
												marginBottom: themeConfig.spacing(
													/*hideDrawer ? 1 : */ 2
												),
											}}
										>
											<MDXProvider
												components={components}
											>
												<Component {...pageProps} />
											</MDXProvider>
										</div>
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
											<strong>official writer</strong>,
											get <strong>site updates</strong>,
											and <strong>much more</strong>.
										</Hint>
										{/* {!fm || (fm && !fm.hidden) ? (
											<Pagination />
										) : null} */}
									</Container>
								</div>
							</NoSsr>
						</main>
						{/* {fm && !fm.hidden ? (
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
						) : null} */}
						<div className={classes.empty} />
						{/* <Footer hideDrawer={hideDrawer} /> */}
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
						{isHome ? <div className={classes.empty} /> : null}
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
								onOpen={(e, r) => {
									if (r !== "focus") speedDialHandleOpen();
								}}
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
								{/* {fm && fm.description ? (
									<SpeedDialAction
										onClick={speedDialHandleClose}
										tooltipOpen
										tooltipTitle="Table of contents"
										FabProps={{
											onClick: () => setTocOpen(true),
										}}
										icon={<MenuIcon />}
										classes={{
											staticTooltipLabel:
												classes.dialAction,
										}}
									/>
								) : null} */}
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
					</div>
				</ThemeProvider>
			</FirebaseAuthProvider>
		</React.Fragment>
	);
}

MinehutXYZ.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

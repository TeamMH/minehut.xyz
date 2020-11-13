import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import CustomDrawer from "../src/CustomDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Brightness7 from "@material-ui/icons/Brightness7";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Brightness4 } from "@material-ui/icons";
import { useRouter } from "next/router";
import { Hidden } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		// backgroundColor: "#373b42",
		background: "linear-gradient(120deg, #7289da, #66a6ff)",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	navTheme: {
		marginRight: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
	},
}));

const themeObject = {
	palette: {
		type: "dark",
		background: {
			default: "#282b30",
		},
		white: "#f3f3f3",
	},
};

const useDarkMode = () => {
	const [theme, setTheme] = React.useState(themeObject);

	const {
		palette: { type },
	} = theme;
	const toggleDarkMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === "dark" ? "light" : "dark",
				background: {
					default: type === "dark" ? "#f3f3f3" : "#282b30",
				},
			},
		};
		setTheme(updatedTheme);
	};
	return [theme, toggleDarkMode];
};

const appBarTheme = createMuiTheme(themeObject);

export default function MyApp(props) {
	const classes = useStyles();
	const [theme, toggleDarkMode] = useDarkMode();

	const { Component, pageProps } = props;
	const themeConfig = createMuiTheme(theme);

	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	const router = useRouter();
	let title = router.asPath
		.split("/")
		[router.asPath.split("/").length - 1].replace(/-(.)/g, (e) =>
			e[1].toUpperCase()
		)
		.replace("-", " ");
	if (title) title = title[0].toUpperCase() + title.slice(1);

	return (
		<React.Fragment>
			<Head>
				<title>{"minehut.xyz" + (title ? " | " + title : "")}</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={themeConfig}>
				<div className={classes.root}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<AppBar position="fixed" className={classes.appBar}>
						<ThemeProvider theme={appBarTheme}>
							<Toolbar>
								<Hidden mdUp>
									<IconButton
										onClick={() => setOpen(!open)}
										className={classes.menuButton}
									>
										<MenuIcon />
									</IconButton>
								</Hidden>
								<Typography
									variant="h6"
									className={classes.title}
								>
									minehut.xyz
								</Typography>
								<IconButton
									className={classes.themeIcon}
									onClick={toggleDarkMode}
								>
									{theme.palette.type === "dark" ? (
										<Brightness7
											className={classes.themeIcon}
										/>
									) : (
										<Brightness4
											className={classes.themeIcon}
										/>
									)}
								</IconButton>
							</Toolbar>
						</ThemeProvider>
					</AppBar>
					<CustomDrawer open={open} setOpen={setOpen} />
					<main className={classes.content}>
						<Toolbar />
						<Component {...pageProps} />
					</main>
				</div>
			</ThemeProvider>
		</React.Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

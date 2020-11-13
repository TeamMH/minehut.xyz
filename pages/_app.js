import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import CustomDrawer from "../src/CustomDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Brightness7 from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: "#373b42",
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

export default function MyApp(props) {
	const classes = useStyles();
	const [state, setState] = React.useState(true);

	const handleChange = (event) => {
		setState(!state);
		theme.palette.type = theme.palette.type === "darK" ? "light" : "dark";
	};
	const { Component, pageProps } = props;

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>Minehut.xyz</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<div className={classes.root}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<AppBar position="fixed" className={classes.appBar}>
						<Toolbar>
							<Typography variant="h6" className={classes.title}>
								Minehut
							</Typography>
							<IconButton onClick={handleChange}>
								<Brightness7 />
							</IconButton>
						</Toolbar>
					</AppBar>
					<CustomDrawer />
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

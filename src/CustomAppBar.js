import {
	makeStyles,
	AppBar,
	ThemeProvider,
	Hidden,
	Toolbar,
	IconButton,
	Tooltip,
	SvgIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4 from "@material-ui/icons/Brightness4";
import Brightness7 from "@material-ui/icons/Brightness7";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import Minehut from "../public/minehut.svg";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	toolBar: {
		[theme.breakpoints.only("xs")]: {
			justifyContent: "space-between",
		},
	},
	empty: {
		flexGrow: 1,
	},
}));

export default function CustomAppBar({
	themeConfig,
	appBarTheme,
	toggleDarkMode,
	setOpen,
	open,
}) {
	const classes = useStyles();
	const loaded = useLoaded();

	return (
		<ThemeProvider theme={appBarTheme}>
			<AppBar position="fixed" color="inherit" className={classes.appBar}>
				<Toolbar className={classes.toolBar}>
					<Hidden lgUp>
						<Tooltip title="Open menu">
							<IconButton
								onClick={() => setOpen(!open)}
								className={classes.menuButton}
								centerRipple={false}
							>
								<MenuIcon />
							</IconButton>
						</Tooltip>
					</Hidden>
					<Tooltip title="Back to home">
						<IconButton
							component={Link}
							href="/"
							naked
							centerRipple={false}
						>
							<SvgIcon
								component={Minehut}
								viewBox="0, 0, 400, 400"
								fontSize="large"
							/>
						</IconButton>
					</Tooltip>
					<Hidden xsDown>
						<div className={classes.empty} />
					</Hidden>
					<Tooltip title="Search">
						<IconButton
							component={Link}
							naked
							href="/search"
							centerRipple={false}
						>
							<SearchIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Toggle light/dark theme">
						<IconButton
							onClick={toggleDarkMode}
							centerRipple={false}
						>
							{loaded ? (
								themeConfig.palette.type === "light" ? (
									<Brightness4 />
								) : (
									<Brightness7 />
								)
							) : null}
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

function useLoaded() {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => setLoaded(true), []);
	return loaded;
}

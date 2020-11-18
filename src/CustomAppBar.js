import {
	makeStyles,
	fade,
	AppBar,
	ThemeProvider,
	Hidden,
	Toolbar,
	IconButton,
	Typography,
	Tooltip,
	TextField,
	InputBase,
	Paper,
	ListItemText,
	List,
	ListItem,
	SvgIcon,
	Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4 from "@material-ui/icons/Brightness4";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Minehut from "../public/minehut.svg";
import Link from "./Link";

// const glob = require("glob");
// const fs = require("fs");

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		// backgroundColor: "#373b42",
		background:
			theme.palette.type === "dark"
				? "linear-gradient(120deg, #1f3166, #203659)"
				: "linear-gradient(120deg, #7289da, #66a6ff)",
	},
	title: {
		color: "white",
		textDecoration: "none",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			position: "absolute",
			left: "50%",
			transform: "translateX(-50%)",
		},
	},
	empty: {
		flexGrow: 1,
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		marginRight: theme.spacing(2),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
	paper: {
		position: "absolute",
		right: 0,
		left: 0,
		top: 35,
		height: 200,
	},
	logo: {
		transform: "translateY(7px)",
		fontSize: "50px",
	},
	themeButton: {
		[theme.breakpoints.down("xs")]: {
			position: "absolute",
			right: theme.spacing(2),
		},
	},
}));

export default function CustomAppBar({
	appBarTheme,
	toggleDarkMode,
	setOpen,
	open,
}) {
	const classes = useStyles();
	const [searching, setSearching] = useState(false);

	return (
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
					<Link href="/" className={classes.title} naked>
						<SvgIcon
							className={classes.logo}
							component={Minehut}
							viewBox="0 0 600 476.6"
						/>
					</Link>
					<Hidden xsDown>
						<div className={classes.empty} />
					</Hidden>
					{/* <div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							onChange={() => {
								setSearching(true);
							}}
							onBlur={() => setSearching(false)}
						/>
						<Paper
							className={classes.paper}
							style={{
								display: searching ? "inline-block" : "none",
							}}
						>
							<List></List>
						</Paper>
					</div> */}
					<Tooltip title="Toggle light/dark theme">
						<IconButton
							className={classes.themeButton}
							onClick={toggleDarkMode}
						>
							<Brightness4 />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</ThemeProvider>
		</AppBar>
	);
}

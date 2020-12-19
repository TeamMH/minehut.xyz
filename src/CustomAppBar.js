import {
	makeStyles,
	AppBar,
	ThemeProvider,
	Hidden,
	Toolbar,
	IconButton,
	Tooltip,
	SvgIcon,
	NoSsr,
	Menu,
	MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4 from "@material-ui/icons/Brightness4";
import Brightness7 from "@material-ui/icons/Brightness7";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useEffect, useState } from "react";
import Minehut from "../public/minehut.svg";
import Link from "./Link";
import { useRouter } from "next/router";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 3,
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
	is404,
}) {
	const classes = useStyles();
	const router = useRouter();

	const isHome = router.pathname === "/";

	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollTop(window.pageYOffset);
		});
	});

	const menuButton = (
		<Tooltip title="Open menu">
			<IconButton
				onClick={() => setOpen(!open)}
				className={classes.menuButton}
				centerRipple={false}
			>
				<MenuIcon />
			</IconButton>
		</Tooltip>
	);

	return (
		<ThemeProvider theme={appBarTheme}>
			<AppBar
				position="fixed"
				color="inherit"
				className={classes.appBar}
				elevation={scrollTop <= 20 && (isHome || is404) ? 0 : 4}
				color={
					scrollTop <= 20 && (isHome || is404)
						? "transparent"
						: "inherit"
				}
			>
				<Toolbar className={classes.toolBar}>
					{!isHome && !is404 ? (
						<Hidden lgUp>{menuButton}</Hidden>
					) : (
						menuButton
					)}
					<Hidden smUp>
						<AccountMenu />
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
							<NoSsr>
								{themeConfig.palette.type === "light" ? (
									<Brightness4 />
								) : (
									<Brightness7 />
								)}
							</NoSsr>
						</IconButton>
					</Tooltip>
					<Hidden xsDown>
						<AccountMenu />
					</Hidden>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
}

function AccountMenu() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (e) => setAnchorEl(e.currentTarget);

	const handleClose = () => setAnchorEl(null);

	return (
		<div>
			<IconButton centerRipple={false} onClick={handleClick}>
				<AccountCircleIcon />
			</IconButton>
			<FirebaseAuthConsumer>
				{({ isSignedIn, providerId, user }) => {
					if (!isSignedIn)
						return (
							<Menu
								anchorEl={anchorEl}
								open={!!anchorEl}
								onClose={handleClose}
								keepMounted
							>
								<MenuItem
									onClick={handleClose}
									component={Link}
									naked
									href="/login"
								>
									Sign in
								</MenuItem>
							</Menu>
						);
					else
						return (
							<Menu
								anchorEl={anchorEl}
								open={!!anchorEl}
								onClose={handleClose}
								keepMounted
							>
								<MenuItem
									onClick={() => {
										firebase.auth().signOut();
										handleClose();
									}}
								>
									Sign out
								</MenuItem>
								<MenuItem onClick={handleClose}>
									Account
								</MenuItem>
							</Menu>
						);
				}}
			</FirebaseAuthConsumer>
		</div>
	);
}

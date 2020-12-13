import React, { useEffect } from "react";
import {
	Drawer,
	Toolbar,
	List,
	ListItem,
	ListItemText,
	Collapse,
	Hidden,
	SwipeableDrawer,
	ListSubheader,
	ListItemSecondaryAction,
	IconButton,
	useMediaQuery,
} from "@material-ui/core";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRouter } from "next/router";
import routes from "../routes.json";

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: 300,
		flexShrink: 0,
	},
	drawerPaper: {
		width: 300,
		maxWidth: "100%",
	},
	drawerContainer: {
		overflowY: "auto",
		overflowX: "hidden",
		paddingRight: "0 !important",
	},
	subheader: {
		marginTop: theme.spacing(4),
		backgroundColor: theme.palette.background.paper,
		fontSize: ".9rem",
		letterSpacing: "1px",
	},
}));

export default function CustomDrawer({ open, setOpen }) {
	const router = useRouter();

	const tempDropdowns = { pathname: router.pathname };

	function setStates(routes) {
		Object.keys(routes).forEach((route) => {
			if (typeof routes[route] !== "object") return;

			tempDropdowns[route] = {
				open: router.pathname.startsWith(routes[route].__dirroute__),
				selected: router.pathname.startsWith(
					routes[route].__dirroute__
				),
				href: routes[route].__dirroute__,
			};

			setStates(routes[route]);
		});
	}

	setStates(routes);

	const [dropdowns, setDropdowns] = React.useState(tempDropdowns);

	useEffect(() => {
		if (router.pathname === dropdowns.pathname) return;
		setStates(routes);

		setDropdowns({
			...tempDropdowns,
			pathname: router.pathname,
		});
	}, [router]);

	function updateDropdown(route) {
		setDropdowns({
			...dropdowns,
			[route]: {
				...dropdowns[route],
				open: !dropdowns[route].open,
			},
		});
	}

	const theme = useTheme();

	const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

	function mapRoutes(routes, i) {
		return Object.keys(routes).map((route, index) => {
			if (typeof routes[route] === "string") {
				if (route === "__dirroute__") return null;
				return (
					<ListItem
						button
						component={Link}
						naked
						href={routes[route]}
						key={routes[route]}
						selected={router.pathname === routes[route]}
						onClick={() => setOpen(false)}
						dense={matchesMd}
					>
						<ListItemText
							style={{
								marginLeft: `${
									Math.max(i - 1, 0) * 32 + (i === 0 ? 0 : 16)
								}px`,
							}}
						>
							{route}
						</ListItemText>
					</ListItem>
				);
			} else {
				if (i === 0)
					return (
						<div key={route + "-div"}>
							<ListSubheader
								className={classes.subheader}
								key={route}
							>
								<strong>{route.toUpperCase()}</strong>
							</ListSubheader>
							{mapRoutes(routes[route], i + 1)}
						</div>
					);
				else
					return (
						<div key={route + "-div"}>
							<ListItem
								button
								component={Link}
								naked
								href={dropdowns[route].href}
								onClick={() => setOpen(false)}
								key={route}
								selected={dropdowns[route].selected}
								dense={matchesMd}
							>
								<ListItemText
									style={{
										marginLeft: `${
											Math.max(i - 1, 0) * 32 +
											(i === 0 ? 0 : 16)
										}px`,
									}}
								>
									{route}
								</ListItemText>
								<ListItemSecondaryAction>
									<IconButton
										size={matchesMd ? "small" : "medium"}
										onClick={() => {
											updateDropdown(route);
										}}
									>
										{dropdowns[route].open ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)}
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>
							<Collapse
								key={route + "-dropdown"}
								in={dropdowns[route].open}
							>
								{mapRoutes(routes[route], i + 1)}
							</Collapse>
						</div>
					);
			}
		});
	}

	const classes = useStyles();

	const drawer = (
		<div className={classes.drawerContainer}>
			<List>{mapRoutes(routes, 0)}</List>
		</div>
	);

	const isHome = router.pathname === "/";

	return (
		<>
			{!isHome ? (
				<>
					<Hidden mdDown>
						<Drawer
							className={classes.drawer}
							variant="permanent"
							classes={{
								paper: classes.drawerPaper,
							}}
							anchor="left"
						>
							<Toolbar />
							{drawer}
						</Drawer>
					</Hidden>

					<Hidden lgUp>
						<SwipeableDrawer
							className={classes.drawer}
							variant="temporary"
							open={open}
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							classes={{
								paper: classes.drawerPaper,
							}}
							anchor="left"
						>
							{drawer}
						</SwipeableDrawer>
					</Hidden>
				</>
			) : (
				<SwipeableDrawer
					className={classes.drawer}
					variant="temporary"
					open={open}
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					classes={{
						paper: classes.drawerPaper,
					}}
					anchor="left"
				>
					{drawer}
				</SwipeableDrawer>
			)}
		</>
	);
}

import React from "react";
import {
	Drawer,
	Toolbar,
	List,
	ListItem,
	ListItemText,
	Collapse,
	Hidden,
	SwipeableDrawer,
} from "@material-ui/core";
import Link from "../src/Link";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRouter } from "next/router";

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		maxWidth: "100%",
		flexShrink: 0,
		textAlign: "right",
	},
	drawerPaper: {
		width: drawerWidth,
		maxWidth: "100%",
		// backgroundColor: theme.palette.type === "dark" ? "#303030" : "#eeeeee",
		//background: "linear-gradient(120deg, #7289da, #66a6ff)",
		backgroundColor: theme.palette.type === "dark" ? "#2e3238" : "#eeeeee",
	},
	drawerContainer: {
		overflowY: "auto",
		overflowX: "hidden",
		marginTop: theme.spacing(4),
	},
	category: {
		color: theme.palette.text.disabled,
		marginTop: theme.spacing(3),
	},
}));

export default function CustomDrawer({ open, setOpen }) {
	const routes = {
		Home: "/",
		Contribute: "/contribute",
		Partnerships: "/partnerships",
		"Plugin List": "/plugin-list",
		"Plugin Tutorials": {
			"Recommended Plugins": "/plugin-tutorials/recommended-plugins",
		},
		Skript: {
			Skript: "/skript/skript",
			Tutorials: {
				Test: "/skript/tutorials/test",
			},
		},
	};

	const dropdowns = {};

	function setStates(routes) {
		Object.keys(routes).forEach((route) => {
			if (typeof routes[route] !== "object") return;
			const [open, setOpen] = React.useState(false);
			dropdowns[route] = {};
			dropdowns[route].open = open;
			dropdowns[route].setOpen = setOpen;
			setStates(routes[route]);
		});
	}

	setStates(routes);

	const router = useRouter();

	function mapRoutes(routes, i) {
		return Object.keys(routes).map((route, index) => {
			if (typeof routes[route] === "string") {
				return (
					<ListItem
						button
						component={Link}
						naked
						href={routes[route]}
						key={routes[route]}
						selected={router.asPath === routes[route]}
						onClick={() => setOpen(false)}
					>
						<ListItemText
							style={{
								marginLeft: `${Math.max(i - 1, 0) * 32 + 8}px`,
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
							<ListItem key={route} className={classes.category}>
								<ListItemText style={{ marginLeft: 8 }}>
									<strong>{route.toUpperCase()}</strong>
								</ListItemText>
							</ListItem>
							{mapRoutes(routes[route], i + 1)}
						</div>
					);
				else
					return (
						<div key={route + "-div"}>
							<ListItem
								button
								onClick={() => {
									dropdowns[route].setOpen(
										!dropdowns[route].open
									);
								}}
								key={route}
							>
								<ListItemText
									style={{
										marginLeft: `${
											Math.max(i - 1, 0) * 32 + 8
										}px`,
									}}
								>
									{route}
								</ListItemText>
								{dropdowns[route].open ? (
									<ExpandLess />
								) : (
									<ExpandMore />
								)}
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

	return (
		<>
			<Hidden smDown>
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
			<Hidden mdUp>
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
	);
}

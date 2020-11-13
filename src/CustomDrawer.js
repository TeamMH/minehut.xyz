import React from "react";
import {
	Drawer,
	Toolbar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Collapse,
} from "@material-ui/core";
import Link from "../src/Link";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/Inbox";
import { makeStyles } from "@material-ui/core/styles";
import theme from "./theme";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRouter } from "next/router";
import Router from "next/dist/next-server/server/router";

const drawerWidth = 350;

const useStyles = makeStyles({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		textAlign: "right",
		color: "white !important",
	},
	drawerPaper: {
		width: drawerWidth,
		// backgroundColor: theme.palette.type === "dark" ? "#303030" : "#eeeeee",
		//background: "linear-gradient(120deg, #7289da, #66a6ff)",
		backgroundColor: "#2e3238",
	},
	drawerContainer: {
		overflowY: "auto",
		overflowX: "hidden",
		marginTop: theme.spacing(4),
	},
	nestedText: {
		marginLeft: theme.spacing(3),
	},
});

export default function CustomDrawer() {
	const routes = {
		Home: "/",
		Contribute: "/contribute",
		Partnerships: "/partnerships",
		FAQ: {
			Skript: "/faq/skript",
		},
		Plugins: {
			"Plugin List": "/plugins/plugin-list",
			"Recommended Plugins": "/plugins/recommended-plugins",
		},
	};

	const dropdowns = {};

	Object.keys(routes).forEach((route) => {
		if (typeof routes[route] !== "object") return;
		const [open, setOpen] = React.useState(false);
		dropdowns[route] = {};
		dropdowns[route].open = open;
		dropdowns[route].setOpen = setOpen;
	});

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
					>
						<ListItemText style={{ marginLeft: `${i * 32}px` }}>
							{route}
						</ListItemText>
					</ListItem>
				);
			} else {
				return (
					<>
						<ListItem
							button
							onClick={() => {
								dropdowns[route].setOpen(
									!dropdowns[route].open
								);
							}}
							key={route}
						>
							<ListItemText style={{ marginLeft: `${i * 16}px` }}>
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
					</>
				);
			}
		});
	}

	const classes = useStyles();

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			anchor="left"
		>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<List dense>{mapRoutes(routes, 0)}</List>
			</div>
		</Drawer>
	);
}

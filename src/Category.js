import {
	Card,
	CardActionArea,
	CardContent,
	Divider,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import routes from "../routes.json";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
	grid: {
		marginBottom: theme.spacing(1),
		marginTop: theme.spacing(1),
	},
	heading: {
		margin: theme.spacing(3, 0),
		whiteSpace: "pre-wrap !important",
		overflowWrap: "anywhere",
		wordBreak: "break-word",
		position: "relative",
		"& button": {
			display: "none",
		},
		"&:hover button": {
			display: "inline-block",
		},
	},
}));

export default function Other() {
	const classes = useStyles();

	const router = useRouter();

	function routesArray(routes, dirName) {
		const array = [];
		Object.keys(routes).forEach((route) => {
			if (route === "__dirroute__") return;
			if (typeof routes[route] === "string")
				array.push([route, routes[route], dirName]);
			else array.push(...routesArray(routes[route], route));
		});
		return array;
	}

	const rArray = routesArray(routes);

	const currentRoutes = rArray.filter((route) =>
		route[1].startsWith(router.pathname)
	);

	const category = currentRoutes[0][2];

	const cards = currentRoutes.map((route) => (
		<Grid item xs={12} sm={6} key={route}>
			<Card>
				<CardActionArea component={Link} naked href={route[1]}>
					<CardContent>
						<Typography variant="h5">{route[0]}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	));

	return (
		<>
			<Typography variant="h4" component="h1" className={classes.heading}>
				{category}
			</Typography>
			<Divider />
			<Grid container spacing={2} className={classes.grid}>
				{cards}
			</Grid>
		</>
	);
}

import {
	makeStyles,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Breadcrumbs,
} from "@material-ui/core";
import { routesArray } from "../lib/utils";
import Link from "./Link";
import routes from "../routes.json";
import { useRouter } from "next/router";
import { frontMatter } from "../pages/**/*.md";

const useStyles = makeStyles((theme) => ({
	navGrid: {
		marginTop: theme.spacing(1),
	},
	card: {
		height: "100%",
	},
}));

export default function Pagination() {
	const router = useRouter();

	const rArray = routesArray(routes).filter(
		(r) => !frontMatter.find((f) => f && f.name === r[1].slice(1))?.hidden
	);
	const current = rArray.findIndex((r) => r[1] === router.pathname);
	const classes = useStyles();

	return (
		<Grid spacing={2} className={classes.navGrid} container>
			{current ? (
				<Grid xs={12} sm={current + 1 < rArray.length ? 6 : 12} item>
					<Card className={classes.card} elevation={2}>
						<CardActionArea
							naked
							component={Link}
							href={rArray[current - 1][1]}
							className={classes.card}
						>
							<CardContent>
								<Typography
									variant="subtitle1"
									color="textSecondary"
								>
									Previous
								</Typography>
								<Typography variant="h5">
									{rArray[current - 1][0] === "__dirroute__"
										? rArray[current - 1][2]
												.split("/")
												.reverse()[0]
										: rArray[current - 1][0]}
								</Typography>
								{rArray[current - 1][2].split("/").length >=
								2 ? (
									<Breadcrumbs separator=">">
										{rArray[current - 1][2]
											.split("/")
											.reverse()
											.slice(1)
											.reverse()
											.map((route) => (
												<Typography key={route}>
													{route}
												</Typography>
											))}
									</Breadcrumbs>
								) : null}
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			) : null}
			{current + 1 < rArray.length ? (
				<Grid xs={12} sm={current ? 6 : 12} item>
					<Card className={classes.card} elevation={2}>
						<CardActionArea
							component={Link}
							naked
							href={rArray[current + 1][1]}
							className={classes.card}
						>
							<CardContent>
								<Typography
									variant="subtitle1"
									color="textSecondary"
								>
									Next Up
								</Typography>
								<Typography variant="h5">
									{rArray[current + 1][0] === "__dirroute__"
										? rArray[current + 1][2]
												.split("/")
												.reverse()[0]
										: rArray[current + 1][0]}
								</Typography>
								{rArray[current + 1][2].split("/").length >=
								2 ? (
									<Breadcrumbs separator=">">
										{rArray[current + 1][2]
											.split("/")
											.reverse()
											.slice(1)
											.reverse()
											.map((route) => (
												<Typography key={route}>
													{route}
												</Typography>
											))}
									</Breadcrumbs>
								) : null}
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			) : null}
		</Grid>
	);
}

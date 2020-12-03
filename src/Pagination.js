import {
	makeStyles,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Breadcrumbs,
} from "@material-ui/core";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
	navGrid: {
		marginTop: theme.spacing(1),
	},
	card: {
		height: "100%",
	},
}));

export default function Pagination({ current, rArray }) {
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
									{rArray[current - 1][0]}
								</Typography>
								{rArray[current - 1][1].split("/").length >=
								3 ? (
									<Breadcrumbs separator=">">
										{rArray[current - 1][1]
											.split("/")
											.slice(1)
											.reverse()
											.slice(1)
											.reverse()
											.map((route) => (
												<Typography key={route}>
													{route
														.replace(
															/-./g,
															(e) =>
																" " +
																e[1].toUpperCase()
														)
														.split("")
														.map((c, i) =>
															i === 0
																? c.toUpperCase()
																: c
														)
														.join("")}
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
									{rArray[current + 1][0]}
								</Typography>
								{rArray[current + 1][1].split("/").length >=
								3 ? (
									<Breadcrumbs separator=">">
										{rArray[current + 1][1]
											.split("/")
											.slice(1)
											.reverse()
											.slice(1)
											.reverse()
											.map((route) => (
												<Typography key={route}>
													{route
														.replace(
															/-./g,
															(e) =>
																" " +
																e[1].toUpperCase()
														)
														.split("")
														.map((c, i) =>
															i === 0
																? c.toUpperCase()
																: c
														)
														.join("")}
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

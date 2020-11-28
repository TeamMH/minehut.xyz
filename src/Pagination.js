import {
	makeStyles,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Typography,
} from "@material-ui/core";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
	navGrid: {
		marginTop: theme.spacing(2),
	},
}));

export default function Pagination({ current, rArray }) {
	const classes = useStyles();

	return (
		<Grid spacing={3} className={classes.navGrid} container>
			{current ? (
				<Grid xs={12} sm={current + 1 < rArray.length ? 6 : 12} item>
					<Card>
						<CardActionArea
							naked
							component={Link}
							href={rArray[current - 1][1]}
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
								<Typography
									variant="subtitle2"
									color="textSecondary"
									display="inline"
								>
									{rArray[current - 1][1].split("/").length >=
									3
										? rArray[current - 1][1]
												.split("/")[1]
												.replace(
													/-./g,
													(e) =>
														" " + e[1].toUpperCase()
												)
												.split("")
												.map((c, i) =>
													i === 0
														? c.toUpperCase()
														: c
												)
												.join("")
										: null}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			) : null}
			{current + 1 < rArray.length ? (
				<Grid xs={12} sm={current ? 6 : 12} item>
					<Card>
						<CardActionArea
							component={Link}
							naked
							href={rArray[current + 1][1]}
						>
							<CardContent>
								<Typography
									variant="subtitle1"
									style={{
										color: "#aaaaaa",
									}}
								>
									Next Up
								</Typography>
								<Typography variant="h5">
									{rArray[current + 1][0]}
								</Typography>
								<Typography
									variant="subtitle2"
									color="textSecondary"
									display="inline"
								>
									{rArray[current + 1][1].split("/").length >=
									3
										? rArray[current + 1][1]
												.split("/")[1]
												.replace(
													/-./g,
													(e) =>
														" " + e[1].toUpperCase()
												)
												.split("")
												.map((c, i) =>
													i === 0
														? c.toUpperCase()
														: c
												)
												.join("")
										: null}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			) : null}
		</Grid>
	);
}

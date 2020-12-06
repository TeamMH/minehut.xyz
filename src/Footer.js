import {
	Box,
	Container,
	Divider,
	Grid,
	Link,
	makeStyles,
	SvgIcon,
	Typography,
} from "@material-ui/core";
import Minehut from "../public/minehut.svg";

const useStyles = makeStyles((theme) => ({
	footer: {
		height: "100%",
		width: "100%",
		position: "relative",
		zIndex: theme.zIndex.drawer + 1,
	},
	footerContainer: {
		background: theme.palette.background.paper,
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		height: "100%",
		width: "100%",
		textAlign: "center",
	},
	footerLogo: {
		fontSize: "3rem",
		position: "relative",
		top: 15,
		margin: theme.spacing(0, 1),
		fill: theme.palette.type === "light" ? "#488AFF" : "currentColor",
	},
}));

export function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Divider />
			<Box className={classes.footerContainer}>
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography variant="h4" component="h1">
								<SvgIcon
									component={Minehut}
									viewBox="0 0 400 400"
									className={classes.footerLogo}
								/>
								minehut.xyz
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant="h6">Links</Typography>
							<Typography>
								<Link href="/home" color="textSecondary">
									Home
								</Link>
							</Typography>
							<Typography>
								<Link href="/contribute" color="textSecondary">
									Contribute
								</Link>
							</Typography>
							<Typography>
								<Link
									href="/plugins/plugin-list"
									color="textSecondary"
								>
									Plugin List
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant="h6">Social</Typography>
							<Typography>
								<Link
									href="https://discord.gg/bS6FMMCVyg"
									color="textSecondary"
									target="_blank"
								>
									Discord
								</Link>
							</Typography>
							<Typography>
								<Link
									href="https://github.com/TeamMH/minehut.xyz"
									color="textSecondary"
									target="_blank"
								>
									GitHub
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography variant="h6">Minehut</Typography>
							<Typography>
								<Link
									href="https://minehut.com"
									color="textSecondary"
									target="_blank"
								>
									Website
								</Link>
							</Typography>
							<Typography>
								<Link
									href="https://forums.minehut.com"
									color="textSecondary"
									target="_blank"
								>
									Forums
								</Link>
							</Typography>
							<Typography>
								<Link
									href="https://discord.gg/minehut"
									color="textSecondary"
									target="_blank"
								>
									Discord
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
}

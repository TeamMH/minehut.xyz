import {
	Button,
	Container,
	Grid,
	Hidden,
	makeStyles,
	SvgIcon,
	Typography,
	useTheme,
} from "@material-ui/core";
import { GitHub, Search } from "@material-ui/icons";
import Discord from "../public/discord.svg";
import Minehut from "../public/minehut.svg";

const useStyles = makeStyles((theme) => {
	return {
		empty: {
			height: "100vh",
		},
		banner: {
			height: "100vh",
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			color: theme.palette.text.primary,
			zIndex: theme.zIndex.drawer + 1,
			background: "url(/home.png) no-repeat center",
			backgroundSize: "cover",
		},
		heading: {
			whiteSpace: "pre-wrap !important",
			overflowWrap: "anywhere",
			wordBreak: "break-word",
			position: "relative",
			zIndex: theme.zIndex.drawer + 2,
			"& button": {
				display: "none",
			},
			"&:hover button": {
				display: "inline-block",
			},
		},
		headline: {
			color: "#488AFF",
			zIndex: theme.zIndex.drawer + 2,
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(3),
		},
		discordButton: {
			background: "#7289DA",
			"&:hover": {
				background: "#5f72b6",
			},
			color: "white",
		},
		githubButton: {
			background: theme.palette.background.paper,
			color: theme.palette.text.primary,
			"&:hover": {
				background: theme.palette.background.default,
			},
		},
		button: {
			width: "100%",
		},
		grid: {
			width: 300,
			maxWidth: "100%",
		},
		logo: {
			fontSize: "5rem",
			position: "relative",
			top: 25,
			margin: theme.spacing(0, 1),
			fill: "currentColor", // "#488AFF"
		},
	};
});

export default function Banner() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.empty} />
			<div className={classes.banner}>
				<Container maxWidth="lg">
					<Hidden xsDown>
						<Typography
							variant="h2"
							component="h1"
							className={classes.heading}
						>
							<SvgIcon
								component={Minehut}
								viewBox="0 0 400 400"
								className={classes.logo}
							/>
							minehut.xyz
						</Typography>
					</Hidden>
					<Hidden smUp>
						<Typography
							variant="h3"
							component="h1"
							className={classes.heading}
						>
							minehut.xyz
						</Typography>
					</Hidden>
					<Typography
						variant="h4"
						component="h2"
						className={classes.headline}
						paragraph
					>
						The leading Minehut support website.
					</Typography>
					<Grid container className={classes.grid} spacing={1}>
						<Grid item xs={6}>
							<Button
								startIcon={
									<SvgIcon
										viewBox="0 0 245 240"
										component={Discord}
									/>
								}
								className={`${classes.discordButton} ${classes.button}`}
								variant="contained"
								href="https://discord.gg/bS6FMMCVyg"
								target="_blank"
							>
								Discord
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								className={`${classes.githubButton} ${classes.button}`}
								variant="contained"
								startIcon={<GitHub />}
								href="https://github.com/TeamMH/minehut.xyz"
								target="_blank"
							>
								GitHub
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button
								href="/search"
								color="secondary"
								size="large"
								startIcon={<Search />}
								variant="contained"
								className={classes.button}
							>
								Search for an article...
							</Button>
						</Grid>
					</Grid>
				</Container>
			</div>
		</>
	);
}

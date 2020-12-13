import {
	Button,
	Container,
	Hidden,
	makeStyles,
	SvgIcon,
	Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Minehut from "../public/minehut.svg";
import Link from "./Link";

const useStyles = makeStyles((theme) => {
	return {
		empty: {
			height: "100vh",
			marginBottom: -theme.spacing(8),
		},
		banner: {
			height: "100%",
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			color: "white",
			zIndex: theme.zIndex.drawer + 1,
			textAlign: "right",
			overflowY: "hidden",
			[theme.breakpoints.down("sm")]: {
				textAlign: "center",
			},
		},
		image: {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			position: "absolute",
			zIndex: "-1",
			background: `url(/${
				theme.palette.type === "light" ? "home-light" : "home-dark"
			}.png) no-repeat center`,
			backgroundSize: "cover",
			transform: (props) => `translateY(${props.scrollTop / 4}px)`,
			filter: theme.palette.type === "light" ? "brightness(.7)" : "none",
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
		logo: {
			fontSize: "5rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "4rem",
				top: 20,
			},
			position: "relative",
			top: 25,
			margin: theme.spacing(0, 1),
			fill: "currentColor", // "#488AFF"
		},
	};
});

export default function Banner() {
	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollTop(window.pageYOffset);
		});
	});

	const classes = useStyles({ scrollTop });

	return (
		<>
			<div className={classes.empty} />
			<div className={classes.banner}>
				<div className={classes.image} />
				<Container fixed>
					<Hidden smDown>
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
					<Hidden mdUp>
						<Typography
							variant="h3"
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
					<Typography
						variant="h4"
						component="h2"
						className={classes.headline}
						paragraph
					>
						The leading Minehut support website.
					</Typography>
					<Button
						component={Link}
						naked
						href="/search"
						color="secondary"
						size="large"
						startIcon={<Search />}
						variant="contained"
						className={classes.button}
					>
						Search for an article...
					</Button>
				</Container>
			</div>
		</>
	);
}

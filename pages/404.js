import { Container, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import Link from "../src/Link";

const useStyles = makeStyles((theme) => {
	return {
		empty: {
			height: "100vh",
			position: "relative",
			top: -80,
		},
		banner: {
			height: "100vh",
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			zIndex: theme.zIndex.drawer + 1,
			overflowY: "hidden",
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
		innerContainer: {
			height: "95%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			color: "white",
			[theme.breakpoints.down("sm")]: {
				textAlign: "center",
			},
			fontSize: "1.2rem !important",
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
		divider: {
			position: "absolute",
			top: "100vh",
			left: 0,
			width: "100%",
			height: theme.spacing(1),
			background: theme.palette.primary.main,
		},
	};
});

export default function Banner404() {
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
				<div className={classes.innerContainer}>
					<Container fixed>
						<Typography
							className={classes.heading}
							variant="h3"
							component="h1"
						>
							404 NOT FOUND
						</Typography>
						<Typography variant="h6" component="p">
							The page you were looking for could not be found.
						</Typography>
						<Typography variant="h6" component="p">
							Links:
							<ul>
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/plugins/plugin-list">
										Plugin List
									</Link>
								</li>
								<li>
									<Link href="/contribute">Contribute</Link>
								</li>
							</ul>
						</Typography>
					</Container>
				</div>
			</div>
			<div className={classes.divider} />
		</>
	);
}

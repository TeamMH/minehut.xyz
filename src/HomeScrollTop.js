import { useScrollTrigger, makeStyles, Zoom, NoSsr } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		bottom: theme.spacing(2),
		left: "50%",
		transform: "translateX(-50%)",
		zIndex: 1300,
	},
}));

export default function ScrollTop({ children }) {
	const classes = useStyles();

	const trigger =
		typeof window !== "undefined"
			? useScrollTrigger({
					disableHysteresis: true,
					threshold: 300,
			  })
			: null;

	const handleClick = () => {
		window.scrollTo({
			top: document.getElementById("h1-home").offsetTop - 112,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<NoSsr>
			<div className={classes.root}>
				<Zoom in={!trigger}>
					<div onClick={handleClick} role="presentation">
						{children}
					</div>
				</Zoom>
			</div>
		</NoSsr>
	);
}

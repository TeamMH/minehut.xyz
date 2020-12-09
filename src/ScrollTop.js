import { useScrollTrigger, makeStyles, Zoom } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		bottom: theme.spacing(18),
		right: theme.spacing(2),
		zIndex: 1300,
	},
}));

export default function ScrollTop({ children }) {
	const classes = useStyles();

	const trigger = useScrollTrigger({ disableHysteresis: true });

	const handleClick = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<Zoom in={trigger}>
			<div
				onClick={handleClick}
				role="presentation"
				className={classes.root}
			>
				{children}
			</div>
		</Zoom>
	);
}

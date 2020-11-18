import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InfoIcon from "@material-ui/icons/Info";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles((theme) => ({
	root: {
		borderLeft: (props) =>
			"5px solid " + theme.palette[props.style || "success"].main,
		width: "100%",
		padding: theme.spacing(3, 1),
		marginBottom: theme.spacing(3),
		backgroundColor: theme.palette.background.paper,
	},
	icon: {
		width: "35px",
		height: "35px",
		transform: "translateY(3px)",
		margin: theme.spacing(0, 1),
	},
	text: {
		margin: theme.spacing(0, 1),
		overflowWrap: "anywhere",
		whiteSpace: "pre-wrap",
	},
}));

export default function Hint(props) {
	const classes = useStyles(props);

	let icon;

	switch (props.style) {
		case "success":
			icon = <CheckCircleOutlineIcon className={classes.icon} />;
			break;
		case "info":
			icon = <InfoIcon className={classes.icon} />;
			break;
		case "warning":
			icon = <EmojiObjectsIcon className={classes.icon} />;
			break;
		case "error":
			icon = <BuildIcon className={classes.icon} />;
			break;
		default:
			icon = <CheckCircleOutlineIcon className={classes.icon} />;
			break;
	}

	return (
		<Paper elevation={0} className={classes.root}>
			<Box display="flex" alignItems="center">
				{icon}
				<Typography className={classes.text}>
					{props.children}
				</Typography>
			</Box>
		</Paper>
	);
}

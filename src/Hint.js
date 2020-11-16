import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InfoIcon from "@material-ui/icons/Info";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles((theme) => ({
	root: {
		borderLeft: (props) =>
			"5px solid " + theme.palette[props.style || "success"].main,
		width: "100%",
		padding: theme.spacing(4),
		marginBottom: theme.spacing(3),
		backgroundColor: theme.palette.type === "dark" ? "#2e3238" : "#eeeeee",
	},
	icon: {
		//margin: theme.spacing(1),
		display: "inline",
		fontSize: "2rem",
		transform: "translateY(3px)",
	},
	text: {
		overflowWrap: "anywhere",
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
			<Grid
				container
				spacing={6}
				alignItems="center"
				justify="space-between"
			>
				<Grid xs={1} item>
					{icon}
				</Grid>
				<Grid xs={11} item>
					<Typography className={classes.text}>
						{props.children}
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}

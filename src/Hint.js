import { makeStyles, Paper } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	hint: {
		margin: theme.spacing(3, 0),
	},
}));

export default function Hint({ style, children, disableMargin }) {
	const classes = useStyles();

	return (
		<Paper>
			<Alert
				variant="outlined"
				severity={style}
				className={disableMargin ? null : classes.hint}
				style={{ lineHeight: 1.625 }}
			>
				{children}
			</Alert>
		</Paper>
	);
}

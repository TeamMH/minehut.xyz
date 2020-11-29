import { makeStyles, Paper } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	hint: {
		marginBottom: theme.spacing(3),
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
			>
				{children}
			</Alert>
		</Paper>
	);
}

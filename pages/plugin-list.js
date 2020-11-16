import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
	accordion: {
		width: "100%",
		background: theme.palette.type === "dark" ? "#30343a" : "#eeeeee",
	},
	accordionDetails: {
		display: "block",
	},
}));

export default function PluginList(props) {
	const classes = useStyles();
	const plugins = props.plugins.map((plugin) => {
		return (
			<Accordion key={plugin._id} className={classes.accordion}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Grid
						container
						spacing={2}
						justify="space-between"
						alignItems="center"
					>
						<Grid item>
							<Typography variant="h6">{plugin.name}</Typography>
						</Grid>
						<Grid item>
							<Typography>{plugin.version}</Typography>
						</Grid>
					</Grid>
				</AccordionSummary>
				<AccordionDetails className={classes.accordionDetails}>
					{plugin.desc_extended.split("\n").map((d) => (
						<Typography paragraph>{d}</Typography>
					))}
					<br />
					<Typography variant="body2">
						Last updated:{" "}
						{new Date(plugin.last_updated).toLocaleDateString()}
					</Typography>
				</AccordionDetails>
			</Accordion>
		);
	});
	return <>{plugins}</>;
}

export async function getStaticProps() {
	const res = await fetch("https://api.minehut.com/plugins_public");
	const { all: plugins } = await res.json();

	return { props: { plugins } };
}

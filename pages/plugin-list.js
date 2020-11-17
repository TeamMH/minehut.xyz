import React from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Grid,
	Hidden,
	Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		fontSize: "1rem",
	},
	accordion: {
		background: theme.palette.type === "dark" ? "#273142" : "#eeeeee",
		overflowWrap: "break-word !important",
		wordBreak: "break-word !important",
		whiteSpace: "pre-wrap !important",
		fontSize: "0.5rem !important",
		maxWidth: "100%",
	},
	accordionDetails: {
		fontSize: "0.5rem !important",
		display: "block",
	},
}));

export default function PluginList(props) {
	const classes = useStyles();

	const [open, setOpen] = React.useState(-1);

	console.log(props.plugins.length - props.plugins.map((p) => p.match));

	const plugins = props.plugins.map((plugin, i) => {
		return (
			<Accordion
				TransitionProps={{ unmountOnExit: true }}
				key={plugin._id}
				className={classes.accordion}
				onChange={(e, isExpanded) => setOpen(isExpanded ? i : -1)}
				expanded={open === i}
			>
				<AccordionSummary
					key={plugin._id}
					expandIcon={<ExpandMoreIcon />}
				>
					<Grid
						container
						spacing={3}
						justify="space-between"
						alignItems="center"
					>
						<Grid xs={12} sm={9} item>
							<Typography variant="h6">{plugin.name}</Typography>
						</Grid>
						<Grid xs={12} sm={3} item>
							<Hidden xsDown>
								<Typography variant="body1" align="right">
									{plugin.version}
								</Typography>
							</Hidden>
							<Hidden smUp>
								<Typography variant="body1">
									{plugin.version}
								</Typography>
							</Hidden>
						</Grid>
					</Grid>
				</AccordionSummary>
				<AccordionDetails
					key={plugin._id}
					className={classes.accordionDetails}
				>
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
	return <div className={classes.root}>{plugins}</div>;
}

export async function getStaticProps() {
	const res = await fetch("https://api.minehut.com/plugins_public");
	const { all: plugins } = await res.json();

	return { props: { plugins } };
}

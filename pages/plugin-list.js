import React from "react";
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Divider,
	Grid,
	Hidden,
	Paper,
	TablePagination,
	TextField,
	Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import { Pagination } from "@material-ui/lab";
import Link from "../src/Link";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		fontSize: "1rem",
	},
	accordion: {
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
	input: {
		width: "100%",
	},
	paper: {
		margin: theme.spacing(2, 0),
		padding: theme.spacing(2),
	},
	text: {
		margin: theme.spacing(3, 0),
	},
}));

export default function PluginList(props) {
	const classes = useStyles();

	const [open, setOpen] = React.useState(-1);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(25);

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const [plugins, setPlugins] = React.useState(props.plugins);

	return (
		<div className={classes.root}>
			<Typography variant="h4" className={classes.text}>
				PLUGIN LIST
			</Typography>
			<Divider />
			<Typography className={classes.text}>
				Look up all available plugins on Minehut!
			</Typography>
			<Paper className={classes.paper}>
				<TextField
					className={classes.input}
					label="Search for plugins"
					onChange={(e) => {
						if (!e.target.value) setPlugins(props.plugins);
						else
							setPlugins(
								props.plugins.filter((p) =>
									p.name
										.toLowerCase()
										.includes(e.target.value.toLowerCase())
								)
							);
					}}
				/>
				<TablePagination
					component="div"
					count={plugins.length}
					page={page}
					onChangePage={(e, v) => setPage(v)}
					rowsPerPage={rowsPerPage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
					className={classes.pagination}
				/>
			</Paper>
			<div>
				{plugins.map((plugin, i) => {
					if (Math.floor(i / rowsPerPage) !== page) return;

					const regex = /Link:\n*(https?:\/\/.+)$/g;
					const regex2 = /\n*(https?:\/\/.+$)/g;
					let link = regex.exec(plugin.desc_extended);
					if (!link || link.length === 0)
						link = regex2.exec(plugin.desc_extended);

					return (
						<Accordion
							TransitionProps={{ unmountOnExit: true }}
							key={plugin._id}
							className={classes.accordion}
							onChange={(e, isExpanded) =>
								setOpen(isExpanded ? i : -1)
							}
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
										<Typography variant="h6">
											{plugin.name}
										</Typography>
									</Grid>
									<Grid xs={12} sm={3} item>
										<Hidden xsDown>
											<Typography
												variant="body1"
												align="right"
											>
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
								{plugin.desc.split("\n").map((d) => (
									<Typography paragraph>
										<strong>Description | </strong>
										{d}
									</Typography>
								))}
								<Typography paragraph>
									<strong>Version | </strong>
									{plugin.version}
								</Typography>
								<Typography paragraph>
									<strong>Last updated | </strong>{" "}
									{new Date(
										plugin.last_updated
									).toLocaleDateString()}
								</Typography>
							</AccordionDetails>
							<Divider />
							<AccordionActions>
								<Button
									disabled={!link || link.length === 0}
									href={
										link && link.length > 0 ? link[1] : null
									}
									variant="contained"
									color="primary"
									target="_blank"
								>
									Visit Plugin Website
								</Button>
							</AccordionActions>
						</Accordion>
					);
				})}
			</div>
			<TablePagination
				component={Paper}
				count={plugins.length}
				page={page}
				onChangePage={(e, v) => setPage(v)}
				rowsPerPage={rowsPerPage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
				className={classes.paper}
			/>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://api.minehut.com/plugins_public");
	const { all: plugins } = await res.json();

	return { props: { plugins } };
}

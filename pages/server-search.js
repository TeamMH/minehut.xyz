import {
	Button,
	Card,
	CardActions,
	CardContent,
	Dialog,
	DialogTitle,
	Divider,
	Fade,
	Grid,
	Link,
	List,
	ListItem,
	ListItemText,
	makeStyles,
	TextField,
	Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { copyToClipboard, snakeToSentenceCase } from "../lib/utils";
import Hint from "../src/Hint";

const useStyles = makeStyles((theme) => ({
	divider: {
		marginBottom: theme.spacing(2),
	},
	textField: {
		flexGrow: 1,
		[theme.breakpoints.up("sm")]: {
			marginRight: theme.spacing(1),
		},
		[theme.breakpoints.down("xs")]: {
			marginBottom: theme.spacing(1),
		},
	},
	button: {
		flexShrink: 0,
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: theme.spacing(1),
			width: "100%",
		},
	},
	heading: {
		margin: theme.spacing(3, 0),
		whiteSpace: "pre-wrap !important",
		overflowWrap: "anywhere",
		wordBreak: "break-word",
		position: "relative",
		"& button": {
			display: "none",
		},
		"&:hover button": {
			display: "inline-block",
		},
	},
	card: {
		marginTop: theme.spacing(2),
	},
	serverName: {
		marginBottom: theme.spacing(1),
	},
	form: {
		display: "flex",
		[theme.breakpoints.down("xs")]: {
			flexWrap: "wrap",
		},
	},
}));

export default function ServerSearch({ plugins }) {
	const classes = useStyles();

	const router = useRouter();

	const [query, setQuery] = useState("");

	useEffect(() => {
		const search = document.querySelector("input");

		if (search && query !== router.query.q) {
			search.focus();
			setQuery(router.query.q || "");
		}
	}, [router]);

	const [server, setServer] = useState({});
	const [error, setError] = useState("");

	async function searchServer(name) {
		const res = await fetch(
			`https://api.minehut.com/server/${name}?byName=true`
		);

		const json = await res.json();

		if (json && json.server) {
			setServer(json.server);
			setError("");
		} else if (res.status < 200 || res.status >= 300) {
			setError("Server not found.");
			setServer({});
		}
	}

	const [pluginDialogOpen, setPluginDialogOpen] = useState(false);

	const handlePluginDialogOpen = () => setPluginDialogOpen(true);
	const handlePluginDialogClose = () => setPluginDialogOpen(false);

	const pluginDialog = (
		<Dialog open={pluginDialogOpen} onClose={handlePluginDialogClose}>
			<DialogTitle>{server.name}'s Plugin List</DialogTitle>
			<List>
				{server?.active_plugins?.map((plugin) => {
					const { name, desc_extended } = plugins.find((p) => p._id === plugin);

					const regex = /Link:\n*(https?:\/\/.+)$/g;
					const regex2 = /\n*(https?:\/\/.+$)/g;
					let link = regex.exec(desc_extended);
					if (!link || link.length === 0) link = regex2.exec(desc_extended);

					return (
						<ListItem
							key={plugin}
							button={link && link.length > 0}
							component={Link}
							color="textPrimary"
							underline="none"
							href={link && link.length > 0 ? link[1] : null}
							target="_blank"
						>
							<ListItemText>{name}</ListItemText>
						</ListItem>
					);
				})}
			</List>
		</Dialog>
	);

	const [propertyDialogOpen, setPropertyDialogOpen] = useState(false);

	const handlePropertyDialogOpen = () => setPropertyDialogOpen(true);
	const handlePropertyDialogClose = () => setPropertyDialogOpen(false);

	const propertyDialog = (
		<Dialog open={propertyDialogOpen} onClose={handlePropertyDialogClose}>
			<DialogTitle>{server.name}'s Properties</DialogTitle>
			<List>
				{server?.server_properties
					? Object.keys(server?.server_properties)?.map((property) => {
							let propertyValue = server.server_properties[property];

							if (typeof propertyValue === "boolean")
								propertyValue = propertyValue ? "Yes" : "No";
							else if (typeof propertyValue === "string")
								propertyValue = snakeToSentenceCase(propertyValue);

							if (propertyValue === "") propertyValue = "N/A";
							return (
								<ListItem key={property}>
									<ListItemText>
										<Typography color="textSecondary">
											{snakeToSentenceCase(property)}
										</Typography>
										<Typography>{propertyValue}</Typography>
									</ListItemText>
								</ListItem>
							);
					  })
					: null}
			</List>
		</Dialog>
	);

	return (
		<>
			<Typography className={classes.heading} variant="h4" component="h1">
				SERVER SEARCH
			</Typography>
			<Typography color="textSecondary" paragraph>
				Look up a Minehut server.
			</Typography>
			<Divider className={classes.divider} />
			<form
				onSubmit={(e) => {
					e.preventDefault();
					searchServer(document.getElementById("input").value);
				}}
				className={classes.form}
			>
				<TextField
					variant="filled"
					label="Server name or id"
					className={classes.textField}
					id="input"
				/>
				<Button
					color="primary"
					variant="contained"
					className={classes.button}
					onClick={() => searchServer(document.getElementById("input").value)}
				>
					Search
				</Button>
			</form>
			{Object.keys(server).length ? (
				<>
					<Fade in={!!Object.keys(server).length} timeout={500}>
						<Card className={classes.card}>
							<CardContent>
								<Typography variant="h5" className={classes.serverName}>
									{server.name}
								</Typography>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">Online</Typography>
										<Typography>{server.online ? "Yes" : "No"}</Typography>
									</Grid>
									{!server.online ? (
										<Grid item xs={12} sm={6} md={4}>
											<Typography color="textSecondary">
												Last online at
											</Typography>
											<Typography>
												{new Date(server.last_online).toUTCString()}
											</Typography>
										</Grid>
									) : null}
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">MOTD</Typography>
										<Typography>
											{server.motd.replace(/&[0-9a-fk-o]/g, "")}
										</Typography>
									</Grid>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">Created at</Typography>
										<Typography>
											{new Date(server.creation).toUTCString()}
										</Typography>
									</Grid>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">
											Online players
										</Typography>
										<Typography>{server.playerCount}</Typography>
									</Grid>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">Max players</Typography>
										<Typography>{server.maxPlayers}</Typography>
									</Grid>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">Icon</Typography>
										<Typography>
											{server.icon ? snakeToSentenceCase(server.icon) : "Sign"}
										</Typography>
									</Grid>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">
											Credits per day
										</Typography>
										<Typography>
											{Math.round(server.credits_per_day) ===
											server.credits_per_day
												? server.credits_per_day
												: "~" + Math.round(server.credits_per_day)}
										</Typography>
									</Grid>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">Plan</Typography>
										<Typography>
											{snakeToSentenceCase(server.server_plan)}
										</Typography>
									</Grid>
									<Grid item xs={12} sm={6} md={4}>
										<Typography color="textSecondary">Suspended</Typography>
										<Typography>{server.suspended ? "Yes" : "No"}</Typography>
									</Grid>
								</Grid>
							</CardContent>
							<CardActions>
								<Button
									disabled={server.active_plugins.length === 0}
									onClick={handlePluginDialogOpen}
								>
									Open plugin list
								</Button>
								<Button onClick={handlePropertyDialogOpen}>
									Open property list
								</Button>
								<Button
									onClick={() => copyToClipboard(`${server.name}.minehut.gg`)}
								>
									Copy server IP
								</Button>
							</CardActions>
						</Card>
					</Fade>
					{pluginDialog}
					{propertyDialog}
				</>
			) : null}
			{error ? (
				<Fade in={!!error} timeout={500}>
					<div className={classes.card}>
						<Hint disableMargin severity="error">
							{error}
						</Hint>
					</div>
				</Fade>
			) : null}
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch("https://api.minehut.com/plugins_public");
	const { all: plugins } = await res.json();

	return {
		props: {
			plugins,
		},
	};
}

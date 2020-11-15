import {
	makeStyles,
	AppBar,
	ThemeProvider,
	Hidden,
	Toolbar,
	IconButton,
	Typography,
	Tooltip,
	TextField,
	InputBase,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4 from "@material-ui/icons/Brightness4";
import { Autocomplete } from "@material-ui/lab";
// const glob = require("glob");
// const fs = require("fs");

const keywords = [];

const useStyles = makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		// backgroundColor: "#373b42",
		background: "linear-gradient(120deg, #7289da, #66a6ff)",
	},
	title: {
		flexGrow: 1,
	},
}));

export default function CustomAppBar({
	appBarTheme,
	toggleDarkMode,
	setOpen,
	open,
}) {
	const classes = useStyles();

	let searchbar;

	if (typeof window === "undefined") {
		(async () => {
			const glob = await import("glob");
			const fs = await import("fs");
			const posts = glob.sync("posts/**/*.md");
			posts.forEach((post) => {
				const content = fs
					.readFileSync(post, { encoding: "utf-8" })
					.replace(/\[(.*)\]\(.*\)/g, (s, e) => e);
				keywords.push(
					...content
						.match(/##? .+/g)
						.map((c) => c.replace(/##? /, ""))
				);
			});
		})();
	}

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<ThemeProvider theme={appBarTheme}>
				<Toolbar>
					<Hidden mdUp>
						<IconButton
							onClick={() => setOpen(!open)}
							className={classes.menuButton}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Typography variant="h6" className={classes.title}>
						minehut.xyz
					</Typography>
					{/* <Autocomplete
						renderInput={(params) => (
							<InputBase
								{...params}
								freeSolo
								disableClearable
								placeholder="search"
								options={["hello"]}
								InputProps={{
									...params.InputProps,
									type: "search",
								}}
							/>
						)}
					/> */}
					<Autocomplete
						freeSolo
						id="free-solo-2-demo"
						disableClearable
						options={["hello"]}
						renderInput={(params) => (
							<InputBase
								{...params}
								label="Search input"
								margin="normal"
								variant="outlined"
								InputProps={{
									...params.InputProps,
									type: "search",
								}}
							/>
						)}
					/>
					<Tooltip title="Toggle light/dark theme">
						<IconButton onClick={toggleDarkMode}>
							<Brightness4 />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</ThemeProvider>
		</AppBar>
	);
}

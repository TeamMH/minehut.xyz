import {
	Button,
	Divider,
	Hidden,
	IconButton,
	makeStyles,
	Tooltip,
	Typography,
	useTheme,
	Link,
	Paper,
	TableContainer,
	Table,
	SvgIcon,
	TableHead,
	TableBody,
	TableRow,
	TableCell,
} from "@material-ui/core";
import { GitHub, InsertLink } from "@material-ui/icons";
import { useRouter } from "next/router";
import routeOverrides from "../routeOverrides.json";
import Hint from "../src/Hint";
import NextLink from "../src/Link";
import ContentCopy from "../public/content_copy.svg";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
	atomDark,
	materialLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

/**
 * Get a simplified array of the routes
 * @param {object} routes
 */
export function routesArray(routes) {
	const array = [];
	Object.keys(routes).forEach((route) => {
		if (typeof routes[route] === "string") {
			array.push([
				route,
				routes[route],
				routes[route]
					.split("/")
					.slice(1)
					.map((route) => overrideRouteNames(kebabToStartCase(route)))
					.join("/"),
			]);
		} else array.push(...routesArray(routes[route]));
	});
	return array;
}

export function routesArrayCategory(routes, dirName) {
	const array = [];
	Object.keys(routes).forEach((route) => {
		if (route === "__dirroute__") return;
		if (typeof routes[route] === "string")
			array.push([route, routes[route], dirName]);
		else array.push(...routesArrayCategory(routes[route], route));
	});
	return array;
}

/**
 * Convert kebab case (hello-there) to start case (Hello There)
 * @param {string} string
 */
export function kebabToStartCase(string) {
	return string
		.replace(/-./g, (e) => " " + e[1].toUpperCase())
		.split("")
		.map((c, i) => (i === 0 ? c.toUpperCase() : c))
		.join("");
}

/**
 * Convert snake case (hello_there) to sentence case (Hello there)
 * @param {string} string
 */
export function snakeToSentenceCase(string) {
	return string
		.toLowerCase()
		.replace(/_/g, " ")
		.split("")
		.map((c, i) => (i === 0 ? c.toUpperCase() : c))
		.join("");
}

/**
 * Convert kebab case (hello-there) to sentence case (Hello there)
 * @param {string} string
 */
export function kebabToSentenceCase(string) {
	return string
		.toLowerCase()
		.replace(/-/g, " ")
		.split("")
		.map((c, i) => (i === 0 ? c.toUpperCase() : c))
		.join("");
}

/**
 * Convert start case (Hello There) to kebab case (hello-there)
 * @param {string} string
 */
export function startToKebabCase(string) {
	return string?.toLowerCase().replace(/ +/g, "-");
}

/**
 * Override route names according to `routeOverrides.json`
 * @param {string} string
 */
export function overrideRouteNames(string) {
	if (string)
		routeOverrides.forEach((override) => {
			string = string.replace(new RegExp(override[0], "g"), override[1]);
		});

	return string;
}

/**
 * Override route names according to `routeOverrides.json` in reverse
 * @param {string} string
 */
export function reverseOverrideRouteNames(string) {
	if (string)
		routeOverrides.forEach((override) => {
			string = string.replace(new RegExp(override[1], "g"), override[0]);
		});

	return string;
}

/**
 * Copy `text` to the clipboard
 * @param {string} text
 */
export function copyToClipboard(text) {
	const el = document.createElement("textarea");
	el.value = text;
	el.setAttribute("readonly", "");
	el.style = {
		position: "absolute",
		left: "-9999px",
	};
	document.body.appendChild(el);
	el.select();
	el.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.body.removeChild(el);
}

export const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: "minehut-xyz.firebaseapp.com",
	projectId: "minehut-xyz",
	storageBucket: "minehut-xyz.appspot.com",
	messagingSenderId: "263953233640",
	appId: process.env.NEXT_PUBLIC_APP_ID,
	measurementId: "G-1QLTGB09K6",
	storageBucket: "gs://minehut-xyz.appspot.com",
};

export function getString(props) {
	if (typeof props.children === "string") return props.children;
	else {
		if (Array.isArray(props.children)) {
			return props.children
				.map((c) => (typeof c === "string" ? c : getString(c.props)))
				.join("");
		} else return getString(props.children.props);
	}
}

export function getMadeBy(fm) {
	if (typeof fm.madeBy === "string")
		return fm.madeByLink ? (
			fm.madeByLink.match(/^https?:\/\//) ? (
				<Link href={fm.madeByLink} target="_blank">
					{fm.madeBy}
				</Link>
			) : (
				<NextLink href={fm.madeByLink}>{fm.madeBy}</NextLink>
			)
		) : (
			fm.madeBy
		);
	else if (Array.isArray(fm.madeBy)) {
		const array = fm.madeBy.map((author, i) =>
			fm.madeByLink[i] ? (
				fm.madeByLink[i].match(/^https?:\/\//) ? (
					<Link key={author} href={fm.madeByLink[i]} target="_blank">
						{author}
					</Link>
				) : (
					<NextLink key={author} href={fm.madeByLink[i]}>
						{author}
					</NextLink>
				)
			) : (
				fm.madeBy
			)
		);

		return (
			<>
				{array.length > 2
					? array.slice(0, array.length - 2).map((el) => <>{el}, </>)
					: null}
				{array[array.length - 2]} and {array[array.length - 1]}
			</>
		);
	}
}

export function getHref(pathname) {
	const githubUrl = "https://github.com/TeamMH/minehut.xyz";
	const branch = "main";

	if (pathname === "/") pathname = "/index";

	pathname +=
		pathname !== "/search" && pathname !== "/plugins/plugin-list"
			? ".md"
			: ".js";

	return `${githubUrl}/tree/${branch}/pages${pathname}`;
}

const useStyles = makeStyles((theme) => ({
	heading: {
		margin: theme.spacing(3, 0),
		whiteSpace: "pre-wrap !important",
		overflowWrap: "anywhere",
		wordBreak: "break-word",
		position: "relative",
		textTransform: "uppercase",
		"& button": {
			display: "none",
		},
		"&:hover button": {
			display: "inline-block",
		},
	},
	code: {
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[2],
	},
	tableContainer: {
		marginBottom: theme.spacing(2),
	},
	tableHeading: {
		borderBottom: "2px solid " + theme.palette.divider + " !important",
	},
	tableCell: {
		borderBottom: "1px solid " + theme.palette.divider,
	},
	inlineCode: {
		background:
			theme.palette.type === "dark"
				? "rgb(43, 47, 51)"
				: "rgb(250, 250, 250)",
		padding: 3,
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[1],
	},
	img: {
		margin: theme.spacing(2) + "px auto 0 auto",
		display: "block",
		maxWidth: "100%",
		height: "auto",
		borderRadius: theme.shape.borderRadius,
		boxShadow: theme.shadows[2],
		background: "white",
	},
	buttonSingleLine: {
		position: "absolute",
		right: 5,
		top: "50%",
		transform: "translateY(-50%)",
		zIndex: 10,
	},
	buttonMultiLine: {
		position: "absolute",
		top: 5,
		right: 5,
		zIndex: 10,
	},
	paragraph: {
		marginTop: theme.spacing(2),
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
	linkCopyButton: {
		display: "inline-block",
		height: "100%",
		width: "auto",
		position: "relative",
		bottom: 4,
		left: 8,
		margin: "-10px 0",
	},
	githubButton: {
		marginBottom: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			float: "right",
		},
		zIndex: "1",
	},
}));

export function useComponents(fm) {
	const classes = useStyles();
	const theme = useTheme();
	const router = useRouter();

	return {
		h1(props) {
			return (
				<>
					{fm && !fm.hidden ? (
						<Hidden xsDown>
							<Button
								href={getHref(router.pathname)}
								target="_blank"
								className={classes.githubButton}
								variant="contained"
								startIcon={<GitHub />}
								color="primary"
							>
								Edit this page on GitHub
							</Button>
						</Hidden>
					) : null}
					<Typography
						className={classes.heading}
						id={
							"h1-" +
							getString(props).toLowerCase().replace(/ +/g, "-")
						}
						{...props}
						variant="h4"
						component="h1"
					>
						{props.children}
						<Tooltip title="Copy heading link">
							<IconButton
								className={classes.linkCopyButton}
								onClick={() => {
									const { query } = router;
									router
										.replace({
											query: {
												...query,
												scrollTo:
													"h1-" +
													getString(props)
														.toLowerCase()
														.replace(/ +/g, "-"),
											},
										})
										.then(() =>
											copyToClipboard(
												window.location.href
											)
										);
								}}
								centerRipple={false}
							>
								<InsertLink />
							</IconButton>
						</Tooltip>
					</Typography>
					{fm && !fm.hidden ? (
						<Hidden smUp>
							<Button
								href={getHref(router.pathname)}
								target="_blank"
								className={classes.githubButton}
								variant="contained"
								startIcon={<GitHub />}
								color="primary"
							>
								Edit this page on GitHub
							</Button>
						</Hidden>
					) : null}
					<Typography color="textSecondary" paragraph>
						{fm ? fm.description : null}
					</Typography>

					<Divider />
					{fm && fm.madeBy ? (
						<Hint severity="info">
							This tutorial was made by {getMadeBy(fm)}. Learn how
							to contribute{" "}
							<NextLink href="/contribute">here</NextLink>.
						</Hint>
					) : null}
				</>
			);
		},
		h2(props) {
			return (
				<>
					<Divider />
					<Typography
						className={classes.heading}
						{...props}
						variant="h5"
						id={
							"h2-" +
							getString(props).toLowerCase().replace(/ +/g, "-")
						}
						component="h2"
					>
						{props.children}
						<Tooltip title="Copy heading link">
							<IconButton
								className={classes.linkCopyButton}
								onClick={() => {
									const { query } = router;
									router
										.replace({
											query: {
												...query,
												scrollTo:
													"h2-" +
													getString(props)
														.toLowerCase()
														.replace(/ +/g, "-"),
											},
										})
										.then(() =>
											copyToClipboard(
												window.location.href
											)
										);
								}}
								centerRipple={false}
							>
								<InsertLink />
							</IconButton>
						</Tooltip>
					</Typography>
				</>
			);
		},
		h3(props) {
			return (
				<Typography
					id={
						"h3-" +
						getString(props).toLowerCase().replace(/ +/g, "-")
					}
					className={classes.heading}
					{...props}
					variant="h6"
					component="h3"
				>
					{props.children}
					<Tooltip title="Copy heading link">
						<IconButton
							className={classes.linkCopyButton}
							onClick={() => {
								const { query } = router;
								router
									.replace({
										query: {
											...query,
											scrollTo:
												"h3-" +
												getString(props)
													.toLowerCase()
													.replace(/ +/g, "-"),
										},
									})
									.then(() =>
										copyToClipboard(window.location.href)
									);
							}}
							centerRipple={false}
						>
							<InsertLink />
						</IconButton>
					</Tooltip>
				</Typography>
			);
		},
		h4(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="subtitle1"
					component="h4"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		h5(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="subtitle2"
					component="h5"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		h6(props) {
			return (
				<Typography
					className={classes.heading}
					{...props}
					variant="button"
					component="h6"
				>
					{typeof props.children === "string"
						? props.children.toUpperCase()
						: props.children}
				</Typography>
			);
		},
		p(props) {
			return (
				<Typography
					className={classes.paragraph}
					{...props}
					variant="body1"
					paragraph
				/>
			);
		},
		a(props) {
			if (props.href && props.href.match(/^https?:\/\//))
				return <Link target="_blank" {...props} />;
			else return <NextLink {...props} />;
		},
		table(props) {
			return (
				<TableContainer
					className={classes.tableContainer}
					component={Paper}
					elevation={2}
				>
					<Table {...props} />
				</TableContainer>
			);
		},
		thead(props) {
			return <TableHead {...props} />;
		},
		tbody(props) {
			return <TableBody {...props} />;
		},
		tr(props) {
			return <TableRow {...props} />;
		},
		th(props) {
			return (
				<TableCell
					className={classes.tableCell + " " + classes.tableHeading}
					{...props}
				/>
			);
		},
		td(props) {
			return <TableCell className={classes.tableCell} {...props} />;
		},
		code(props) {
			const numberOfLines = props.children.replace(/\n$/, "").split("\n")
				.length;
			return (
				<div style={{ position: "relative" }}>
					<Tooltip title="Copy code to clipboard">
						<IconButton
							centerRipple={false}
							classes={{
								root:
									numberOfLines === 1
										? classes.buttonSingleLine
										: classes.buttonMultiLine,
							}}
							onClick={(e) =>
								copyToClipboard(
									props.children.replace(/\n$/, "")
								)
							}
						>
							<SvgIcon
								component={ContentCopy}
								viewBox="0 0 24 24"
							/>
						</IconButton>
					</Tooltip>
					<SyntaxHighlighter
						showLineNumbers
						wrapLines
						language={
							props.className
								? props.className.replace("language-", "")
								: null
						}
						style={
							theme.palette.type === "dark"
								? atomDark
								: materialLight
						}
						className={classes.code}
					>
						{props.children.replace(/\n$/, "")}
					</SyntaxHighlighter>
				</div>
			);
		},
		inlineCode(props) {
			return <code {...props} className={classes.inlineCode} />;
		},
		img(props) {
			return <img {...props} className={classes.img} />;
		},
		li(props) {
			return <Typography component="li" {...props} />;
		},
		Hint,
	};
}

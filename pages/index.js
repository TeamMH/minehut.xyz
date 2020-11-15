import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Divider, Typography } from "@material-ui/core";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: 16,
		"& a": {
			color:
				theme.palette.type === "dark"
					? theme.palette.info.light
					: theme.palette.info.dark,
			"text-decoration": "none",
		},
		"& table": {
			"border-spacing": "5px",
		},
		"& th": {
			"border-bottom": "1.5px solid " + theme.palette.text.disabled,
		},
		"& pre, & code": {
			whiteSpace: "pre-line !important",
		},
	},
	heading: {
		marginTop: theme.spacing(2),
		paddingTop: theme.spacing(2),
	},
}));

export default function Home({ markdownBody, frontmatter }) {
	const classes = useStyles();

	const renderers = {
		code({ language, value }) {
			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					children={value}
				/>
			);
		},
		heading(props) {
			return (
				<>
					{props.level === 2 ? <Divider /> : null}
					<Typography
						className={classes.heading}
						{...getCoreProps(props)}
						id={
							props.children[0].props &&
							props.children[0].props.value
								? props.children[0].props.value
										.toLowerCase()
										.replace(/ +/g, "-")
								: null
						}
						variant={
							props.level < 5
								? `h${props.level + 2}`
								: `subtitle${props.level - 2}`
						}
						component={`h${props.level}`}
						paragraph
					>
						{props.children}
					</Typography>
				</>
			);
		},
		paragraph(props) {
			return (
				<Typography
					component="p"
					variant="body1"
					{...getCoreProps(props)}
					paragraph
				>
					{props.children}
				</Typography>
			);
		},
	};

	function getCoreProps(props) {
		const source = props["data-sourcepos"];
		/* istanbul ignore next - nodes from plugins w/o position */
		return source ? { "data-sourcepos": source } : {};
	}

	return (
		<Container maxWidth="md">
			<Head>
				<meta content="Home" property="og:title" />

				<meta
					content={frontmatter.description}
					property="og:description"
				/>

				<meta content="minehut.xyz" property="og:site_name" />
			</Head>
			<ReactMarkdown
				className={classes.root}
				plugins={[gfm]}
				source={markdownBody}
				renderers={renderers}
			/>
		</Container>
	);
}

export async function getStaticProps() {
	const content = await import(`../README.md`);
	const config = await import(`../data/config.json`);
	const data = matter(content.default);

	return {
		props: {
			frontmatter: data.data,
			markdownBody: data.content,
		},
	};
}

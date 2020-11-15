import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Head from "next/head";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Divider, IconButton, Link, Typography } from "@material-ui/core";
import FileCopyIcon from "@material-ui/icons/FileCopy";
const glob = require("glob");

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

export default function Slug({ frontmatter, markdownBody, title }) {
	const classes = useStyles();

	/*
	 ** Odd fix to get build to run
	 ** It seems like on first go the props
	 ** are undefined — could be a Next bug?
	 */

	if (!frontmatter) return <></>;

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
				<meta content={title} property="og:title" />

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

export async function getStaticProps({ ...ctx }) {
	let { slug } = ctx.params;
	if (Array.isArray(slug)) slug = slug.join("/");
	const content = await import(`../posts/${slug}.md`);
	const data = matter(content.default);

	let title = slug
		.split("/")
		[slug.split("/").length - 1].replace(/-(.)/g, (e) => e[1].toUpperCase())
		.replace("-", " ");
	title = title[0].toUpperCase() + title.slice(1);

	return {
		props: {
			frontmatter: data.data,
			markdownBody: data.content,
			title,
		},
	};
}

export async function getStaticPaths() {
	//get all .md files in the posts dir
	const posts = glob.sync("posts/**/*.md");

	const fs = await import("fs");

	//remove path and extension to leave filename only
	const postSlugs = posts.map((file) =>
		file
			.split("/")
			.slice(1, file.split("/").length)
			.join("/")
			.replace(/ /g, "-")
			.slice(0, -3)
			.trim()
	);

	// create paths with `slug` param
	const paths = postSlugs.map((slug) => `/${slug}`);
	return {
		paths,
		fallback: false,
	};
}

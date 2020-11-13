import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Head from "next/head";
const glob = require("glob");

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: "18px",
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
		"& h2": {
			marginTop: theme.spacing(3),
			paddingTop: theme.spacing(3),
			borderTop: "1px solid " + theme.palette.text.disabled,
		},
		"& pre, & code": {
			whiteSpace: "normal",
		},
	},
}));

export default function Slug({ frontmatter, markdownBody, title }) {
	function reformatDate(fullDate) {
		const date = new Date(fullDate);
		return date.toDateString().slice(4);
	}

	const classes = useStyles();

	/*
	 ** Odd fix to get build to run
	 ** It seems like on first go the props
	 ** are undefined — could be a Next bug?
	 */

	if (!frontmatter) return <></>;

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
	const blogs = glob.sync("posts/**/*.md");

	//remove path and extension to leave filename only
	const blogSlugs = blogs.map((file) => {
		const f = file
			.split("/")
			.slice(1, file.split("/").length)
			.join("/")
			.replace(/ /g, "-")
			.slice(0, -3)
			.trim();
		//console.log(file, f);
		return f;
	});

	// create paths with `slug` param
	const paths = blogSlugs.map((slug) => `/${slug}`);
	return {
		paths,
		fallback: false,
	};
}

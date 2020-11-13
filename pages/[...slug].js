import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const glob = require("glob");

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: "18px",
		"& a": {
			color: "#00aaff",
			"text-decoration": "none",
		},
		"& table": {
			"border-spacing": "5px",
		},
		"& th": {
			"border-bottom":
				theme.palette.type === "dark"
					? "3px solid #f3f3f3"
					: "3px solid black",
		},
	},
}));

export default function Slug({ frontmatter, markdownBody, siteTitle }) {
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
	const config = await import(`../data/config.json`);
	const data = matter(content.default);

	return {
		props: {
			siteTitle: config.title,
			frontmatter: data.data,
			markdownBody: data.content,
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

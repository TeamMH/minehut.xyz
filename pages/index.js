import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Head from "next/head";

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
	},
}));

export default function Home({ markdownBody }) {
	const classes = useStyles();
	return (
		<Container maxWidth="md">
			<Head>
				<meta content="Home" property="og:title" />

				<meta
					content="Welcome to minehut.xyz"
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

export async function getStaticProps() {
	const content = await import(`../README.md`);
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

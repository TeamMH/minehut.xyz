import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

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

const drawerWidth = 240;

export default function Home({ markdownBody }) {
	const classes = useStyles();
	return (
		<Container maxWidth="md">
			<ReactMarkdown
				className={classes.root}
				plugins={[gfm]}
				source={markdownBody}
			/>
			{/* <style jsx global>
				{`
					a {
						color: #00aaff;
						text-decoration: none;
					}
					table {
						border-spacing: 5px;
					}
					th {
						border-bottom: 3px solid white;
					}
				`}
			</style> */}
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

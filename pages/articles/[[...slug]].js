import { firebaseAdmin } from "../../lib/firebaseAdmin";
import MDX from "@mdx-js/runtime";
import { useComponents } from "../../lib/utils";
import matter from "gray-matter";
import Layout from "../../src/Layout";

export default function Slug({ fm, content }) {
	const components = useComponents(fm);

	return (
		<Layout>
			<MDX components={components}>{`${content}`}</MDX>
		</Layout>
	);
}

export async function getStaticPaths() {
	const storage = firebaseAdmin.storage();
	const bucket = storage.bucket();
	const files = await bucket.getFiles();

	const paths = files[0]
		.filter((file) => file.name !== "index.md")
		.map((file) => ({
			params: { slug: file.name.replace(/\.md$/, "").split("/") },
		}));

	paths.push({ params: { slug: false } });

	return {
		paths,
		fallback: false,
	};
}

export function getStaticProps({ params }) {
	return new Promise((resolve) => {
		const storage = firebaseAdmin.storage();
		const bucket = storage.bucket();
		bucket.getFiles().then((files) => {
			const file = files[0].find(
				(file) =>
					file.name === params.slug?.join("/") + ".md" ||
					(file.name === "index.md" && !params.slug)
			);

			let content = "";

			file.createReadStream()
				.on("data", (res) => (content += res.toString()))
				.on("end", () => {
					const parsed = matter(content);
					resolve({
						props: {
							params,
							fm: parsed.data,
							content: parsed.content,
						},
					});
				});
		});
	});
}

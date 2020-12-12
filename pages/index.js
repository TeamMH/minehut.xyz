import { Container, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Banner from "../src/Banner";
import { themeObject } from "../pages/_app";
import colors from "../colors.json";
import HomeMd from "../home.md";

const themeObject2 = {
	...themeObject,
	palette: {
		...themeObject.palette,
		type: "dark",
		background: {
			...themeObject.palette.colors,
			default: colors.dark.default,
			paper: colors.dark.paper,
		},
	},
};

export default function Home() {
	const theme = createMuiTheme(themeObject2);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Banner />
			</ThemeProvider>
			<Container maxWidth="md">
				<HomeMd />
			</Container>
		</>
	);
}

import {
    Box,
    Container,
    Divider,
    Grid,
    Link,
    makeStyles,
    SvgIcon,
    Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import Minehut from "../public/minehut.svg";

const useStyles = makeStyles((theme) => ({
    footer: {
        maxWidth: "100%",
        flexBasis: (props) =>
            props.isHome || props.hideDrawer ? "100%" : "calc(100% - 300px)",
        [theme.breakpoints.down("md")]: {
            flexBasis: "100% !important",
        },
        position: "relative",
        zIndex: theme.zIndex.drawer + 1,
    },
    footerContainer: {
        background: theme.palette.background.paper,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        width: "100%",
        height: "100%",
        textAlign: "center",
    },
    footerLogo: {
        fontSize: "3rem",
        position: "relative",
        top: 15,
        margin: theme.spacing(0, 1),
        fill: theme.palette.type === "light" ? "#488AFF" : "currentColor",
    },
}));

export function Footer({ hideDrawer }) {
    const router = useRouter();

    const isHome = router.pathname === "/";

    const classes = useStyles({ isHome, hideDrawer });

    return (
        <footer className={classes.footer}>
            <Divider />
            <Box className={classes.footerContainer}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h1">
                                <SvgIcon
                                    component={Minehut}
                                    viewBox="0 0 400 400"
                                    className={classes.footerLogo}
                                />
                                minehut.xyz
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textSecondary">
                                Check our{" "}
                                <strong>
                                    <Link href="https://youtube.com/c/SkriptingTutorials">
                                        official YouTube channel
                                    </Link>
                                </strong>{" "}
                                where you can watch extremely short yet
                                informative videos and learn how to Skript!
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Typography variant="h6">Links</Typography>
                            <Typography>
                                <Link href="/" color="textSecondary">
                                    Home
                                </Link>
                            </Typography>
                            <Typography>
                                <Link href="/contribute" color="textSecondary">
                                    Contribute
                                </Link>
                            </Typography>
                            <Typography>
                                <Link
                                    href="/plugins/plugin-list"
                                    color="textSecondary"
                                >
                                    Plugin List
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Typography variant="h6">Social</Typography>
                            <Typography>
                                <Link
                                    href="https://discord.gg/bS6FMMCVyg"
                                    color="textSecondary"
                                    target="_blank"
                                >
                                    Discord
                                </Link>
                            </Typography>
                            <Typography>
                                <Link
                                    href="https://github.com/TeamMH/minehut.xyz"
                                    color="textSecondary"
                                    target="_blank"
                                >
                                    GitHub
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                            <Typography variant="h6">Minehut</Typography>
                            <Typography>
                                <Link
                                    href="https://minehut.com"
                                    color="textSecondary"
                                    target="_blank"
                                >
                                    Website
                                </Link>
                            </Typography>
                            <Typography>
                                <Link
                                    href="https://forums.minehut.com"
                                    color="textSecondary"
                                    target="_blank"
                                >
                                    Forums
                                </Link>
                            </Typography>
                            <Typography>
                                <Link
                                    href="https://discord.gg/minehut"
                                    color="textSecondary"
                                    target="_blank"
                                >
                                    Discord
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textSecondary">
                                minehut.xyz is not in any way or form affiliated
                                to Minehut. The Minehut logo is a property of
                                Minehut and we do not own it.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

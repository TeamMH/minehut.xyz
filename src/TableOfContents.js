import {
    List,
    ListSubheader,
    ListItem,
    ListItemText,
    makeStyles,
    useTheme,
} from "@material-ui/core";
import ScrollSpy from "react-scrollspy";
import { startToKebabCase } from "../lib/utils";
import colors from "../colors.json";

ScrollSpy.prototype._initFromProps = function (_props) {
    const props = _props ? _props : this.props;

    setTimeout(() => {
        const targetItems = this._initSpyTarget(props.items);

        this.setState({
            targetItems,
        });

        this._spy(targetItems);
    }, 0);
};

ScrollSpy.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    this._initFromProps(nextProps);
};

const useStyles = makeStyles((theme) => ({
    toc: {
        width: "100%",
        "& li": {
            overflow: "hidden",
            [theme.breakpoints.up("md")]: {
                borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
            },
            "& > div": {
                transition: "250ms",
            },
        },
        "& li.active > div": {
            [theme.breakpoints.up("md")]: {
                borderLeft:
                    theme.shape.borderRadius +
                    "px solid " +
                    (theme.palette.type === "dark"
                        ? "#f3f3f3"
                        : colors.dark.paper),
            },
            background:
                theme.palette.type === "dark"
                    ? "rgba(255, 255, 255, .12)"
                    : "rgba(0, 0, 0, .12)",
        },
    },
}));

export default function TableOfContents({ contents, tocOpen, setTocOpen }) {
    const classes = useStyles();

    const theme = useTheme();

    const items = [
        "nothing",
        ...contents.map(
            (c) =>
                (c.match(/(^|\n)###/)
                    ? "h3-"
                    : c.match(/(^|\n)##/)
                    ? "h2-"
                    : "h1-") + startToKebabCase(c.replace(/(^|\n)#{1,3} /, ""))
        ),
    ];

    return (
        <List dense className={classes.toc}>
            <ScrollSpy
                items={items}
                currentClassName="active"
                offset={-112}
                componentTag="div"
            >
                <ListSubheader component="div" disableSticky>
                    TABLE OF CONTENTS
                </ListSubheader>
                {contents.map((c, i) => (
                    <li key={c}>
                        <ListItem
                            button
                            color="inherit"
                            onClick={() => {
                                window.scrollTo({
                                    left: 0,
                                    top:
                                        document.getElementById(
                                            (c.match(/(^|\n)###/)
                                                ? "h3-"
                                                : c.match(/(^|\n)##/)
                                                ? "h2-"
                                                : "h1-") +
                                                startToKebabCase(
                                                    c.replace(
                                                        /(^|\n)#{1,3} /,
                                                        ""
                                                    )
                                                )
                                        ).offsetTop - 112,
                                    behavior: "smooth",
                                });
                                setTocOpen(false);
                            }}
                        >
                            <ListItemText
                                style={{
                                    marginLeft: theme.spacing(
                                        c.match(/(^|\n)###/)
                                            ? 4
                                            : c.match(/(^|\n)##/)
                                            ? 2
                                            : 0
                                    ),
                                }}
                            >
                                {c.replace(/(^|\n)#{1,3} /, "").toUpperCase()}
                            </ListItemText>
                        </ListItem>
                    </li>
                ))}
            </ScrollSpy>
        </List>
    );
}

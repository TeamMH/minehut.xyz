import {
	List,
	ListSubheader,
	ListItem,
	ListItemText,
	makeStyles,
	useTheme,
} from "@material-ui/core";
import ScrollSpy from "react-scrollspy";

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
			transition: "250ms",
			[theme.breakpoints.up("md")]: {
				borderRadius: "5px 0 0 5px",
			},
		},
		"& li.active": {
			[theme.breakpoints.up("md")]: {
				borderLeft:
					"3px solid " +
					(theme.palette.type === "dark" ? "#f3f3f3" : "black"),
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
		...contents.map((c) =>
			c
				.replace(/(^|\n)##? /, "")
				.toLowerCase()
				.replace(/ +/g, "-")
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
					<ListItem
						button
						key={c}
						color="inherit"
						component="li"
						onClick={() => {
							window.scrollTo({
								left: 0,
								top:
									document.getElementById(
										c
											.replace(/(^|\n)##? /, "")
											.toLowerCase()
											.replace(/ +/g, "-")
									).offsetTop - 112,
								behavior: "smooth",
							});
							setTocOpen(false);
						}}
					>
						<ListItemText
							style={{
								marginLeft: theme.spacing(
									c.match(/(^|\n)##/) ? 2 : 0
								),
							}}
						>
							{c.replace(/(^|\n)##? /, "").toUpperCase()}
						</ListItemText>
					</ListItem>
				))}
			</ScrollSpy>
		</List>
	);
}

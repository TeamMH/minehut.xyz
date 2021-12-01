import {
	Button,
	Divider,
	IconButton,
	InputAdornment,
	makeStyles,
	Paper,
	TextField,
	Toolbar,
	Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import fb from "firebase/app";
import "firebase/auth";
import Hint from "./Hint";

const useStyles = makeStyles((theme) => ({
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "flex-end",
		margin: theme.spacing(-1),
		"& > *": {
			margin: theme.spacing(1),
		},
	},
	image: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		height: "110%",
		background: `url(${
			theme.palette.type === "dark" ? "/home-dark.png" : "/home-light.png"
		}) no-repeat center`,
		backgroundSize: "cover",
		zIndex: -1,
		transform: (props) => `translateY(${props.scrollTop / 4}px)`,
	},
	heading: {
		margin: theme.spacing(3, 0),
		whiteSpace: "pre-wrap !important",
		overflowWrap: "anywhere",
		wordBreak: "break-word",
		position: "relative",
		textTransform: "uppercase",
	},
	paper: {
		padding: theme.spacing(2, 4),
	},
}));

export default function SignUp() {
	return <></>;
	const router = useRouter();

	const [email, setEmail] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");

	const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
	const [passwordRepeat, setPasswordRepeat] = useState("");

	const toggleShowPassword = () => setShowPassword(!showPassword);
	const toggleShowPasswordRepeat = () =>
		setShowPasswordRepeat(!showPasswordRepeat);

	const handleEmailChange = (e) => setEmail(e.target.value);

	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handlePasswordRepeatChange = (e) => setPasswordRepeat(e.target.value);

	const [scrollTop, setScrollTop] = useState(0);

	useEffect(() => {
		const scrollHandler = () => {
			setScrollTop(window.pageYOffset);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	});

	const classes = useStyles({ scrollTop });

	const [error, setError] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (password !== passwordRepeat) return setError("Passwords don't match");

		fb.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => setError(""))
			.catch((e) => setError(e.message));
	};

	return (
		<>
			<FirebaseAuthConsumer>
				{({ isSignedIn, providerId, user }) => {
					if (isSignedIn)
						router.push({
							pathname: "/",
						});
				}}
			</FirebaseAuthConsumer>
			<div className={classes.image} />
			<Toolbar />
			<Paper className={classes.paper}>
				<Typography variant="h4" component="h1" className={classes.heading}>
					Sign up
				</Typography>
				<Typography color="textSecondary" paragraph>
					Create a minehut.xyz account
				</Typography>
				<Divider />
				<Hint severity="error">
					This feature is still a work-in-progress! Accounts are{" "}
					<strong>not</strong> currently supported, although we're working to
					bring them as soon as possible.
				</Hint>
				<form onSubmit={handleFormSubmit} className={classes.form}>
					<TextField
						label="Email"
						fullWidth
						value={email}
						onChange={handleEmailChange}
						variant="filled"
					/>
					<TextField
						label="Password"
						type={showPassword ? "text" : "password"}
						fullWidth
						value={password}
						onChange={handlePasswordChange}
						variant="filled"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={toggleShowPassword}>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<TextField
						label="Repeat Password"
						type={showPasswordRepeat ? "text" : "password"}
						fullWidth
						value={passwordRepeat}
						onChange={handlePasswordRepeatChange}
						variant="filled"
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={toggleShowPasswordRepeat}>
										{showPassword ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<Button
						type="submit"
						variant="contained"
						style={{ flexShrink: 0 }}
						color="primary"
						size="large"
					>
						Sign Up
					</Button>
				</form>
				{error && <Hint severity="error">{error}</Hint>}
			</Paper>
		</>
	);
}

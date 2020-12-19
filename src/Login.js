import {
	Button,
	IconButton,
	InputAdornment,
	makeStyles,
	TextField,
	Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Hint from "./Hint";

const useStyles = makeStyles((theme) => ({
	form: {
		width: "80%",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "flex-end",
		gap: theme.spacing(2),
		margin: theme.spacing(2) + "px auto",
	},
}));

export default function Login() {
	const classes = useStyles();
	const router = useRouter();

	const [email, setEmail] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");

	const toggleShowPassword = () => setShowPassword(!showPassword);

	const handleEmailChange = (e) => setEmail(e.target.value);

	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(console.error);
	};

	return (
		<>
			<FirebaseAuthConsumer>
				{({ isSignedIn, providerId, user }) => {
					console.log(isSignedIn);
					if (isSignedIn)
						router.push({
							pathname: "/",
						});
				}}
			</FirebaseAuthConsumer>
			<Hint severity="error">
				This feature is still a work-in-progress! Accounts are{" "}
				<strong>not</strong> currently supported, although we're working
				to bring them as soon as possible.
			</Hint>
			<form onSubmit={handleFormSubmit} className={classes.form}>
				<TextField
					label="Email"
					fullWidth
					value={email}
					onChange={handleEmailChange}
				/>
				<TextField
					label="Password"
					type={showPassword ? "text" : "password"}
					fullWidth
					value={password}
					onChange={handlePasswordChange}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={toggleShowPassword}>
									{showPassword ? (
										<Visibility />
									) : (
										<VisibilityOff />
									)}
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
				>
					Login
				</Button>
			</form>
		</>
	);
}

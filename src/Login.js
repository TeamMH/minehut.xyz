import {
	Button,
	IconButton,
	InputAdornment,
	makeStyles,
	TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";

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

	const [email, setEmail] = useState("");

	const [showPassword, setShowPassword] = useState(false);
	const [password, setPassword] = useState("");

	const toggleShowPassword = () => setShowPassword(!showPassword);

	const handleEmailChange = (e) => setEmail(e.target.value);

	const handlePasswordChange = (e) => setPassword(e.target.value);

	const handleFormSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log("test");
			}}
			className={classes.form}
		>
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
	);
}

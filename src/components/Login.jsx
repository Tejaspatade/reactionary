// import { useState } from "react";
// import {
// 	createUserWithEmailAndPassword,
// 	signInWithPopup,
// 	signOut,
// } from "firebase/auth";

// import { auth, googleProvider } from "../config/firebase";

// const Login = () => {
// 	// React Form Controlled Elements
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");

// 	// Handler Function
// 	const signIn = async () => {
// 		try {
// 			await createUserWithEmailAndPassword(auth, email, password);
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	};

// 	const signInWithGoogle = async () => {
// 		try {
// 			await signInWithPopup(auth, googleProvider);
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	};

// 	const logout = async () => {
// 		try {
// 			await signOut(auth);
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	};

// 	return (
// 		<div
// 			style={{
// 				display: "flex",
// 				justifyContent: "center",
// 				alignItems: "center",
// 				height: "100vh",
// 			}}
// 		>
// 			<div
// 				style={{
// 					display: "flex",
// 					gap: "5px",
// 					flexDirection: "column",
// 					padding: "20px",
// 					maxWidth: "600px",
// 				}}
// 			>
// 				<h2 style={{ textAlign: "center", marginBottom: "20px" }}>
// 					Login
// 				</h2>
// 				<input
// 					type="text"
// 					placeholder="Email..."
// 					style={{
// 						marginBottom: "10px",
// 						padding: "10px",
// 						borderRadius: "4px",
// 						border: "1px solid #ccc",
// 					}}
// 					value={email}
// 					onChange={(e) => setEmail(e.target.value)}
// 				/>
// 				<input
// 					type="password"
// 					placeholder="Password"
// 					style={{
// 						marginBottom: "10px",
// 						padding: "10px",
// 						borderRadius: "4px",
// 						border: "1px solid #ccc",
// 					}}
// 					value={password}
// 					onChange={(e) => setPassword(e.target.value)}
// 				/>
// 				<button
// 					type="submit"
// 					style={{
// 						padding: "5px",
// 						borderRadius: "4px",
// 						border: "none",
// 						backgroundColor: "#1098ad",
// 						color: "#fff",
// 						cursor: "pointer",
// 					}}
// 					onClick={signIn}
// 				>
// 					Login
// 				</button>
// 				<button
// 					style={{
// 						padding: "5px",
// 						borderRadius: "4px",
// 						border: "none",
// 						backgroundColor: "#1098ad",
// 						color: "#fff",
// 						cursor: "pointer",
// 					}}
// 					onClick={signInWithGoogle}
// 				>
// 					Sign In with Google
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

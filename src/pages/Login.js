import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created");
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in");
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <button onClick={signup}>Sign Up</button>
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}

export default Login;

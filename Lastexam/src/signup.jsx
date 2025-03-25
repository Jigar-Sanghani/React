import React, { useState } from "react";
import { getGoogleAuth, login, resetPassword, signup } from "./config/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleAuth = async () => {
    try {
      let userData = await getGoogleAuth();
      localStorage.setItem('user', JSON.stringify(userData));
      setMessage(`Google Sign-in successful: ${userData.displayName}`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (isLogin) {
        let userData = await login(email, password);
        localStorage.setItem('user', JSON.stringify(userData));
        setMessage(`Login Successful! Welcome ${userData.email}`);
      } else {
        let userData = await signup(email, password);
        localStorage.setItem('user', JSON.stringify(userData));
        setMessage(`Signup Successful! Welcome ${userData.email}`);
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleReset = async () => {
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      await resetPassword(email);
      setMessage("Password reset link sent to your email!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm p-4" style={{ width: "350px" }}>
        <h2 className="text-center">{isLogin ? "Login" : "Signup"}</h2>

        {message && <p className="alert alert-danger">{message}</p>}

        <form onSubmit={handleAuth} className="auth-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <button onClick={handleGoogleAuth} className="btn btn-danger w-100 mt-3">
          Sign in with Google
        </button>

        {isLogin && (
          <p onClick={handleReset} className="text-primary mt-2 cursor-pointer">
            Forgot Password?
          </p>
        )}

        <p className="mt-3 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="auth-input"
        />

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="auth-input"
        />

        <button className="auth-btn">Register</button>

        <p className="switch-text">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
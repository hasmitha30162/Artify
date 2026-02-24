import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to Artify</h2>

        <input
          type="text"
          placeholder="Mobile number, username or email"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <button className="login-button">Log In</button>

        <p className="forgot-password">Forgot password?</p>

        <div className="divider">
          <span>OR</span>
        </div>

        <Link to="/register" className="register-button">
           Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
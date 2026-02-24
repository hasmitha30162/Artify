import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      
      {/* Top Row */}
      <div className="navbar-top">

        {/* Logo */}
        <div className="logo">
          🎨 Artify
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search artworks, artists..."
            className="search-input"
          />
        </div>

        {/* Right Side Buttons */}
        <div className="auth-buttons">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/login" className="login-btn">Log In</Link>
          <Link to="/register" className="signup-btn">Sign Up</Link>
        </div>

      </div>

      {/* Bottom Menu */}
      <div className="navbar-bottom">
        <Link to="/whatsnew">What's New</Link>
        <Link to="/artworks">Artworks</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/auctions">Auctions</Link>
      </div>

    </div>
  );
};

export default Navbar;
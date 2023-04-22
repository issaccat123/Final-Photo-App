import { Link, } from "react-router-dom";

export default function Navbar() {
  return (

     <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/About">About</Link>
            </li>
            <li className="nav-item">
            <Link to="/Help">Help</Link>
            </li>
          </ul>
        </nav>
        
    );
  }
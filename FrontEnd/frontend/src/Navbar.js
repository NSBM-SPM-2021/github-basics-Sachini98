import { Link } from "react-router-dom";
import './css/style.css'



const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Chandika Dewruwan</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/services">Time Table</Link>
                <Link to="/about">About</Link>
                <Link className="appointment" to="/appointment">Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;

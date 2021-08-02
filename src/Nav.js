import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h2>Herdshare</h2>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/products'>
                    <li>All Products</li>
                </Link>
                <Link style={navStyle} to='/customers'>
                    <li>Available Customers</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
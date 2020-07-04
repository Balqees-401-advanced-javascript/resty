import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../header.scss';


const Header = () => {
    return (
        <header>
            <h1>RESTy</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <NavLink to="/History" activeClassName="history">History</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
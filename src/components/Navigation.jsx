import React from "react";
import '../styles/Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav>
            <Link to="/">Main</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

export default Navigation;
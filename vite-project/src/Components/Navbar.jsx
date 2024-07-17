import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="/" className="navbar-item">Dashboard</Link>
            <Link to="/login" className="navbar-item">Login</Link>
        </div>
    );
}

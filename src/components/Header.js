import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between">
                <div className="text-lg font-bold">The Bright Hire</div>
                <ul className="flex space-x-4">
                    <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                    <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
                    <li><Link to="/employers" className="hover:text-gray-400">For Employers</Link></li>
                    <li><Link to="/candidates" className="hover:text-gray-400">For Candidates</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-400">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
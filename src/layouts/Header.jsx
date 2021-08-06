import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-gray-700 text-gray-300 shadow-lg">
            <div className="container w-4/5 mx-auto">
                <div className="flex">
                    <NavLink exact to="/" className="py-4 text-2xl font-extrabold">Users</NavLink>
                    <span className="px-4"></span>
                    <ul className="flex flex-row justify-center items-center">
                        <NavLink exact to="/"><li className="px-2 py-5 hover:bg-gray-800">Home</li></NavLink>
                        <NavLink exact to="/about"><li className="px-2 py-5 hover:bg-gray-800">About</li></NavLink>
                        <NavLink exact to="/contact"><li className="px-2 py-5 hover:bg-gray-800">Contact</li></NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

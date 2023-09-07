import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
        <NavLink className='title' to='/'>Home</NavLink>
            <ul>
                <li> <NavLink to='/about'>About</NavLink></li>
                <li> <NavLink to='/resume'>Resume</NavLink></li>
                <li> <NavLink to='/repositories'>Repositories</NavLink></li>
                <li> <NavLink to='/contact'>Contact</NavLink></li>
            </ul>   
        </nav>
    )
}
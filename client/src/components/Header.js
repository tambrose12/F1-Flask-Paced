import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {


    return (
        <header className='header'>
            <NavLink className="button" exact to="/">HOME</NavLink>
            <NavLink className="button" exact to="/drivers">DRIVERS</NavLink>
            <NavLink className="button" exact to="/races">RACES</NavLink>
            <NavLink className="button" exact to="/stats">STATS</NavLink>
        </header>
    )
}

export default Header;

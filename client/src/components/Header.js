import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {


    return (
        <header className='header'>
            <NavLink className="button" exact to="/">Home</NavLink>
            <NavLink className="button" exact to="/drivers">Drivers</NavLink>
            <NavLink className="button" exact to="/races">Races</NavLink>
            <NavLink className="button" exact to="/stats">Stats</NavLink>
        </header>
    )
}

export default Header;

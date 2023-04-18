import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

function Header() {


    return (
        <header>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/drivers">Drivers</NavLink>
            <NavLink exact to="/races">Races</NavLink>
            <NavLink exact to="/stats">Stats</NavLink>
        </header>
    )
}

export default Header;

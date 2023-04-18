import React from 'react'
import { Link } from 'react-router-dom'

function RaceCard({race}) {
    return (
        <div>
            <p>{race.location}</p>
            <p>{race.fastest_time}</p>
        </div>
    )
}

export default RaceCard
import React from 'react'
import { Link } from 'react-router-dom'

function RaceCard({ race }) {
    return (
        <div>
            <p>{race.location}</p>
            <p>{parseFloat(race.fastest_time).toFixed(3)}</p>
            <img src={race.track_image} alt={race.location}/>
        </div>
    )
}

export default RaceCard
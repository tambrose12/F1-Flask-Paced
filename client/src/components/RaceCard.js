import React from 'react'
import { Link } from 'react-router-dom'

function RaceCard({ race }) {
    return (
        <Link className='cardLinks' to={`/races/${race.id}`}>
            <div className='raceCards'>
                <h3>{race.location}</h3>
                <h4>Record Lap Time: {parseFloat(race.fastest_time).toFixed(3)}</h4>
                {/* <Link to={`/races/${race.id}`}> View Track Details </Link> */}
                <img src={race.track_image} alt={race.location} />
                <h3 className="view">View Race Details</h3>
            </div>
        </Link>
    )
}

export default RaceCard
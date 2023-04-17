import React from 'react'
import { Link } from 'react-router-dom'

function DriverCard({ driver }) {
    return (
        <div>
            <h3>{driver.name}</h3>
            <h4>Number {driver.car_number}</h4>
            <h4>Team: {driver.team}</h4>
        </div>
    )
}

export default DriverCard
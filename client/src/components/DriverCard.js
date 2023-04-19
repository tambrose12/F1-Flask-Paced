import React from 'react'
import { Link } from 'react-router-dom'

function DriverCard({ driver, onEditDriver, onUpdateDriver }) {
    
    const handleEditClick = () => {
        onEditDriver(driver)
    }

    return (
        <div>
            <h3>{driver.name}</h3>
            <h4>Number {driver.car_number}</h4>
            <h4>Team: {driver.team}</h4>
            <img src={driver.driver_image} alt={driver.name}/>
            <button onClick={handleEditClick}>Click to Edit Driver</button>
        </div>
    )
}

export default DriverCard
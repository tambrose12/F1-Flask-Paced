import React from 'react'
import { Link } from 'react-router-dom'

function DriverCard({ driver, removeDriverfromState }) {


    const handleDeleteClick = (id) => {
        fetch(`/drivers/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(r => r.json())
            .then(() => removeDriverfromState(id))
        window.alert("Driver Banned and Removed From Roster.");
    }

    return (

        <div className='driverCard'>
            <Link className='cardLinks' to={`/drivers/${driver.id}`}>
                <h3>{driver.name}</h3>
                <h4>Car Number: {driver.car_number}</h4>
                <h4>Team: {driver.team}</h4>
                <img src={driver.driver_image} alt={driver.name} />
                <h3 className="view">View Driver Details</h3>
            </Link>
            <button className="banBtn" onClick={() => handleDeleteClick(driver.id)}>Click to Ban Driver</button>
        </div>
    )
}

export default DriverCard
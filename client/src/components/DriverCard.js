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
    }

    return (

        <div className='driverCard'>
            <Link className='cardLinks' to={`/drivers/${driver.id}`}>
                <h3>{driver.name}</h3>
                <h4>Number {driver.car_number}</h4>
                <h4>Team: {driver.team}</h4>
                <img src={driver.driver_image} alt={driver.name} />
            </Link>
            <button onClick={() => handleDeleteClick(driver.id)}>Ban Driver</button>
        </div>
    )
}

export default DriverCard
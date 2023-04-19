import React from 'react'
import { Link } from 'react-router-dom'

function DriverCard({ driver, onEditDriver, onUpdateDriver, removeDriverfromState }) {

    const handleEditClick = () => {
        onEditDriver(driver)
    }

    const handleDeleteClick = (id) => {
        fetch(`/drivers/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(r => r.json())
            .then(() => removeDriverfromState(id))
    }

    return (
        <Link className='cardLinks' to={`/drivers/${driver.id}`}>
            <div className='driverCard'>
                <h3>{driver.name}</h3>
                <h4>Number {driver.car_number}</h4>
                <h4>Team: {driver.team}</h4>
                <img src={driver.driver_image} alt={driver.name} />
                {/* <Link to={`/drivers/${driver.id}`}> View Driver Details </Link> */}
                <button onClick={handleEditClick}>Click to Edit Driver</button>
                <button onClick={() => handleDeleteClick(driver.id)}>Ban Driver</button>
            </div>
        </Link>
    )
}

export default DriverCard
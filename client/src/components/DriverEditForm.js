import React, { useState, useEffect } from 'react';
import { __RouterContext } from 'react-router';

function DriverEditForm({ driverToEdit, onUpdateDriver }) {
    const [formData, setFormData] = useState(driverToEdit)

    const { name, car_number, team, driver_image } = formData

    useEffect(() => {
        fetch(`/drivers/${driverToEdit.id}`)
            .then(r => r.json())
            .then(driver => setFormData(driver))
    }, [driverToEdit.id])

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => (
            { ...formData, [name]: value }));
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`/drivers/${driverToEdit.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                car_number: parseInt(formData.car_number),
                team: formData.team,
                driver_image: formData.driver_image
            })
        })
            .then(r => r.json())
            .then(updatedDriver => onUpdateDriver(updatedDriver))
        e.target.reset()
    }

    return (
        <div>
            <div className="formDiv">
                <form onSubmit={handleSubmit} >
                    <label for="name"> Enter Driver Name: </label>
                    <input onChange={handleChange} type="text" name="name" value={name} />
                    <label for="car_number"> Enter Car Number: </label>
                    <input onChange={handleChange} type="number" name="car_number" value={car_number} />
                    <label for="team"> Enter Team: </label>
                    <input onChange={handleChange} type="text" name="team" value={team} />
                    <label for="driver_image"> Enter Driver Image URL: </label>
                    <input onChange={handleChange} type="text" name="driver_image" value={driver_image} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default DriverEditForm
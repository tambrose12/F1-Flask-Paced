import React, { useState } from "react";


function AddNewDriver({ addDriverToState }) {

    const [newName, setNewName] = useState('')
    const [newCarNumber, setNewCarNumber] = useState(1)
    const [newTeam, setNewTeam] = useState('')
    const [newImage, setNewImage] = useState('')


    const handleSubmit = e => {
        e.preventDefault()

        const newDriver = {
            name: newName,
            car_number: newCarNumber,
            team: newTeam,
            driver_image: newImage
        }

        fetch('/drivers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDriver)
        })
            .then(r => r.json())
            .then(addDriverToState)
        e.target.reset()
    }

    return (
        <div>
            <div className="formDiv">
                <h3>Add a New Driver</h3>
                <form onSubmit={handleSubmit}>
                    <label for="name"> Enter Driver Name: </label>
                    <input onChange={(e) => setNewName(e.target.value)} type="text" name="name" />
                    <label for="car_number"> Enter Car Number: </label>
                    <input onChange={(e) => setNewCarNumber(parseInt(e.target.value))} type="number" name="car_number" />
                    <label for="team"> Enter Team: </label>
                    <input onChange={(e) => setNewTeam(e.target.value)} type="text" name="team" />
                    <label for="driver_image"> Enter Driver Image URL: </label>
                    <input onChange={(e) => setNewImage(e.target.value)} type="text" name="driver_image" />
                    <input type="submit" />
                </form>
            </div>
        </div>

    )

}

export default AddNewDriver;
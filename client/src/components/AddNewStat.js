import React, { useState } from 'react';

function AddNewStat({ addDriverRaceToState }) {

    const [newDriverID, setNewDriverID] = useState('')
    const [newRaceID, setNewRaceID] = useState('')
    const [newTime, setNewTime] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        const newDriverRace = {
            driver_id: newDriverID,
            race_id: newRaceID,
            time: newTime
        }

        function handleErrors(response) {
            if (!response.ok) {
                window.alert("Error: Ensure all fields are valid");
                throw Error(response.statusText)
            } else if (newDriverRace.driver_id == null) {
                window.alert("Error: Ensure all fields are valid");
                throw Error(response.statusText)
            } else if (newDriverRace.race_id == null) {
                window.alert("Error: Ensure all fields are valid");
                throw Error(response.statusText)
            }
            return response.json();
        }

        fetch('/driver_races', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDriverRace)
        })
            .then(handleErrors)
            .then(addDriverRaceToState)
            .catch(error => console.error("Validation Error: Ensure all fields are valid.", error))
        e.target.reset()
    }

    return (
        <div>
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <label for="driver_id"> Enter Driver ID: </label>
                    <input onChange={(e) => setNewDriverID(parseInt(e.target.value))} type="number" name="driver_id" />
                    <label for="race_id"> Enter Race ID: </label>
                    <input onChange={(e) => setNewRaceID(parseInt(e.target.value))} type="number" name="race_id" />
                    <label for="time"> Enter Time: </label>
                    <input onChange={(e) => setNewTime(e.target.value)} type="text" name="time" />
                    <input type="submit" />
                </form>
            </div>
        </div>

    )
}

export default AddNewStat
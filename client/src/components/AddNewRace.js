import React, { useState } from "react";


function AddNewRace({ addRaceToState }) {

    const [newLocation, setNewLocation] = useState('')
    const [newFastestTime, setFastestTime] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newEvent, setNewEvent] = useState('')
    const [newTrackLength, setNewTrackLength] = useState('')
    const [newLaps, setNewLaps] = useState('')
    const [newDetails, setNewDetails] = useState('')


    // 'id': r.id,
    // 'location': r.location,
    // 'fastest_time': r.fastest_time,
    // 'track_image': r.track_image,
    // 'first_event' : r.first_event,
    // 'track_length': r.track_length,
    // 'laps': r.laps,
    // 'details' : r.details

    const handleSubmit = e => {
        e.preventDefault()

        const newRace = {
            location: newLocation,
            fastest_time: newFastestTime,
            track_image: newImage,
            first_event: newEvent,
            track_length: newTrackLength,
            laps: newLaps,
            details: newDetails
        }

        function handleErrors(response) {
            if (!response.ok) {
                window.alert("Error: Ensure all fields are valid");
                throw Error(response.statusText)
            }
            return response.json();
        }

        fetch('/races', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRace)
        })
            .then(handleErrors)
            .then(addRaceToState)
            .catch(error => console.error("Validation Error: Ensure all fields are valid.", error))
        e.target.reset()
    }

    return (
        <div>
            <h2 className="h">Add a New Race Track</h2>
            <form onSubmit={handleSubmit}>
                <label for="location"> Enter Location: </label>
                <input onChange={(e) => setNewLocation(e.target.value)} type="text" name="location" />
                <label for="fastest_time"> Enter Record Lap Time: </label>
                <input onChange={(e) => setFastestTime(e.target.value)} type="text" name="fastest_time" />
                <label for="track_image"> Enter Image URL: </label>
                <input onChange={(e) => setNewImage(e.target.value)} type="text" name="track_image" />
                <label for="first_event"> Enter First Grand Prix: </label>
                <input onChange={(e) => setNewEvent(e.target.value)} type="text" name="first_event" />
                <label for="track_length"> Enter Track Length: </label>
                <input onChange={(e) => setNewTrackLength(e.target.value)} type="text" name="track_length" />
                <label for="laps"> Enter Number of Laps per Grand Prix: </label>
                <input onChange={(e) => setNewLaps(e.target.value)} type="text" name="laps" />
                <label for="details"> Enter Track Details: </label>
                <input onChange={(e) => setNewDetails(e.target.value)} type="text" name="details" />
                <button className="button" type="submit">Submit Race Track</button>
            </form>
        </div>

    )

}

export default AddNewRace;


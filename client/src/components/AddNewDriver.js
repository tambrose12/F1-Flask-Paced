import React, { useState } from "react";


function AddNewDriver({ addDriverToState }) {

    const [newName, setNewName] = useState('')
    const [newCarNumber, setNewCarNumber] = useState(1)
    const [newTeam, setNewTeam] = useState('')
    const [newImage, setNewImage] = useState('')
    const [newCountry, setNewCountry] = useState('')
    const [newPodium, setNewPodium] = useState(0)
    const [newDob, setNewDob] = useState("")
    const [newBio, setNewBio] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        const newDriver = {
            name: newName,
            car_number: newCarNumber,
            team: newTeam,
            driver_image: newImage,
            country: newCountry,
            podiums: newPodium,
            dob: newDob,
            bio: newBio
        }

        function handleErrors(response) {
            if (!response.ok) {
                window.alert("Error: Ensure all fields are valid");
                throw Error(response.statusText)
            }
            return response.json();
        }

        fetch('/drivers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newDriver)
        })
            .then(handleErrors)
            .then(addDriverToState)
            .catch(error => console.error("Validation Error: Ensure all fields are valid.", error))
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
                    <input onChange={(e) => setNewImage(e.target.value)} placeholder="Optional" type="text" name="driver_image" />
                    <label for="country"> Enter Driver Country: </label>
                    <input onChange={(e) => setNewCountry(e.target.value)} placeholder="Optional" type="text" name="country" />
                    <label for="podiums"> Enter Number of Podiums: </label>
                    <input onChange={(e) => setNewPodium(parseInt(e.target.value))} placeholder="Optional" type="number" name="podium" />
                    <label for="dob"> Enter Driver's DOB: </label>
                    <input onChange={(e) => setNewDob(e.target.value)} placeholder="Optional" type="text" name="dob" />
                    <label for="bio"> Enter Driver's Bio: </label>
                    <textarea onChange={(e) => setNewBio(e.target.value)} placeholder="Optional" type="text" name="bio" />
                    <input className="button" type="submit" />
                </form>
            </div>
        </div>

    )

}

export default AddNewDriver;
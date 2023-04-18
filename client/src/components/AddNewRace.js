import React, {useState} from "react";


function AddNewRace({addRaceToState}){

    const [newLocation, setNewLocation] = useState('')
    const [newFastestTime, setFastestTime] = useState(0.0)
    const [newImage, setNewImage] = useState('')


    const handleSubmit = e => {
        e.preventDefault()

        const newRace = {
            location : newLocation,
            fastest_time: newFastestTime,
            track_image : newImage
        }

        fetch('/races', {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(newRace)
        })
            .then(r => r.json())
            .then(addRaceToState)
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for= "location"> Enter Location: </label>
                <input onChange={(e)=> setNewLocation(e.target.value)} type="text" name="location"/>
                <label for= "fastest_time"> Enter Record Lap Time: </label>
                <input onChange={(e)=> setFastestTime(parseFloat(e.target.value))} type="text" name="fastest_time"/>
                <label for= "track_image"> Enter Image URL: </label>
                <input onChange={(e)=> setNewImage(e.target.value)} type="text" name="track_image"/>
                <input type="submit" />
            </form>
        </div>

    )

}

export default AddNewRace;


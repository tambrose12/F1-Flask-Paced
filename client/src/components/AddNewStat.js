import React, {useState} from 'react';

function AddNewStat({addDriverRaceToState}) {

    const [newDriverID, setNewDriverID] = useState(0)
    const [newRaceID, setNewRaceID] = useState(0)
    const [newTime, setNewTime] = useState(0.0)


    const handleSubmit = e => {
            e.preventDefault()

            const newDriverRace = {
                driver_id : newDriverID,
                race_id : newRaceID,
                time : newTime
            }

            fetch('/driver_races', {
                method : 'POST',
                headers : {'Content-Type': 'application/json'},
                body : JSON.stringify(newDriverRace)
            })
                .then(r => r.json())
                .then(addDriverRaceToState)
            e.target.reset()
        }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for= "driver_id"> Enter Driver ID: </label>
                <input onChange={(e)=> setNewDriverID(parseInt(e.target.value))} type="number" name="driver_id"/>
                <label for= "race_id"> Enter Race ID: </label>
                <input onChange={(e)=> setNewRaceID(parseInt(e.target.value))} type="number" name="race_id"/>
                <label for= "time"> Enter Time: </label>
                <input onChange={(e)=> setNewTime(e.target.value)} type="text" name="time"/>
                <input type="submit" />
            </form>
        </div>

    )
}

export default AddNewStat
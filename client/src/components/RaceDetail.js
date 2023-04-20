import React, { useState, useEffect } from "react";
import Stat from "./Stat";
import { useParams } from "react-router-dom";
import Header from "./Header";


function RaceDetail({ stats }) {

    const [race, setRace] = useState("")

    const { id } = useParams()

    useEffect(() => {
        fetch(`/races/${id}`)
            .then(r => r.json())
            .then(race => setRace(race))
    }, [id])


    const filteredStats = stats.filter(stat => {
        return stat.race_id == id
    })

    const renderFilteredStats = filteredStats.map(stat => {
        return <Stat key={stat.id} stat={stat} />
    })



    return (
        <div>
            <Header />
            <div className="raceDetail">
                <div>
                    <img src={race.track_image} alt={race.location} />
                </div>
                <div>
                    <h1>{race.location}</h1>
                    <h2>First Grand Prix: {race.first_event}</h2>
                    <h2>Track Length: {race.track_length} km</h2>
                    <h2>Laps: {race.laps}</h2>
                </div>
                <br />
            </div>
            <h2>About the Track</h2>
            <p className="bio">{race.details}</p>

            <br />

            <h1> Track Stats </h1>
            <div className="statTable">
                <table className="stats raceTable">
                    <tbody>
                        <tr>
                            <th>
                                Driver
                            </th>
                            <th>
                                Car Number
                            </th>
                            <th>
                                Best Lap (seconds)
                            </th>
                            <th>
                                Team
                            </th>
                            <th>
                                Grand Prix
                            </th>
                            <th>
                                Track Record Lap (seconds)
                            </th>
                        </tr>
                        {renderFilteredStats}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RaceDetail
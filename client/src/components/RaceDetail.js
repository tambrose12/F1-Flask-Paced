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
            <h1>{race.location}</h1>
            <img src={race.track_image} alt={race.location} />
            <br />

            <h3> Track Stats </h3>
            <table>
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
    )
}

export default RaceDetail
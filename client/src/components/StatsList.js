import React from "react";
import Stat from "./Stat";
import Header from "./Header"
import AddNewStat from "./AddNewStat"

function StatsList({ stats, addDriverRaceToState }) {

    const renderStats = stats.map(stat => {
        return <Stat key={stat.id} stat={stat} />
    })

    return (
        <div>
            <Header />
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
                    {renderStats}
                </tbody>
            </table>
            <AddNewStat addDriverRaceToState = {addDriverRaceToState} />

        </div>
    )
}

export default StatsList;
import React from "react";
import Stat from "./Stat";
import Header from "./Header"
import AddNewStat from "./AddNewStat"

function StatsList({ drivers, races, stats, addDriverRaceToState }) {

    const renderStats = stats.map(stat => {
        return <Stat key={stat.id} stat={stat} />
    })

    return (
        <div>
            <Header />
            <div className="statTable">
                <table id="stats">
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
            </div>
            <AddNewStat addDriverRaceToState={addDriverRaceToState} drivers={drivers} races={races}/>

        </div>
    )
}

export default StatsList;
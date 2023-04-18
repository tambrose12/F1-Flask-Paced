import React from "react";
import Stat from "./Stat";
import Header from "./Header"

function StatsList({ stats }) {

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
                            Driver Best Lap (seconds)
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
    )
}

export default StatsList;
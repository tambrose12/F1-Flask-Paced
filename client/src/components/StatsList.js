import React from "react";
import Stat from "./Stat";
import Header from "./Header"
import AddNewStat from "./AddNewStat"
import DriverStat from "./DriverStat"
import RaceStat from "./RaceStat"

function StatsList({ drivers, races, stats, addDriverRaceToState }) {

    const renderStats = stats.map(stat => {
        return <Stat key={stat.id} stat={stat} />
    })

    const driverStats = drivers.map(driver =>{
        return <DriverStat key={driver.id} driver={driver} />
    } )

    const raceStats = races.map(race =>{
        return <RaceStat key={race.id} race={race} />
    } )

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
            <h2>Drivers and Tracks:</h2>
            <div>
                <table id="stats">
                        <tbody>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Driver
                                </th>
                            </tr>
                            {driverStats}
                        </tbody>
                    </table>
            </div>
            <br/>
            <div>
                <table id="stats">
                        <tbody>
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Race Track
                                </th>
                            </tr>
                            {raceStats}
                        </tbody>
                    </table>
            </div>
            <AddNewStat addDriverRaceToState={addDriverRaceToState} drivers={drivers} races={races}/>
        </div>
    )
}

export default StatsList;
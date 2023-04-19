import React from "react";
import RaceCard from "./RaceCard"
import Header from "./Header";
import AddNewRace from "./AddNewRace";

function Races({ raceCards, addRaceToState }) {
    return (
        <div>
            <Header />
            <br />
            <div className="raceList">
                {raceCards}
            </div>
            <div className="formDiv">
                <AddNewRace addRaceToState={addRaceToState} />
            </div>
        </div>
    )
}

export default Races

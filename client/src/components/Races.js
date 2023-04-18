import React from "react";
import RaceCard from "./RaceCard"
import Header from "./Header";
import AddNewRace from "./AddNewRace";

function Races({ raceCards, addRaceToState }) {
    return (
        <div>
            <Header />
            <AddNewRace addRaceToState = {addRaceToState}/>
            {raceCards}
        </div>
    )
}

export default Races

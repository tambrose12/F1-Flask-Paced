import React from "react";
import RaceCard from "./RaceCard"
import Header from "./Header";

function Races({ raceCards }) {
    return (
        <div>
            <Header />
            {raceCards}
        </div>
    )
}

export default Races

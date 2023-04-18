import React from "react";
import Header from "./Header";
import AddNewDriver from "./AddNewDriver";

function Drivers({ driverCards, addDriverToState }) {

    return (
        <div>
            <Header />
            <AddNewDriver addDriverToState = {addDriverToState} />
            {driverCards}
        </div>
    )
}

export default Drivers;
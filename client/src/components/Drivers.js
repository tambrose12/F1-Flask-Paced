import React, { useState } from "react";
import Header from "./Header";
import AddNewDriver from "./AddNewDriver";
import DriverEditForm from "./DriverEditForm"

function Drivers({ driverCards, addDriverToState }) {


    return (
        <div>
            <Header />
            <br />
            <div className="driverList">
                {driverCards}
            </div>
            <AddNewDriver addDriverToState={addDriverToState} />
        </div>
    )
}

export default Drivers;
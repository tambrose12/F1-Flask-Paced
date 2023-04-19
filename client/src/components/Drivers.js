import React, { useState } from "react";
import Header from "./Header";
import AddNewDriver from "./AddNewDriver";
import DriverEditForm from "./DriverEditForm"

function Drivers({ driverCards, addDriverToState, onEditDriver, onUpdateDriver, driverToEdit }) {

    const renderDriverForm = () => {
        if (driverToEdit) {
            return (
                <DriverEditForm driverToEdit={driverToEdit} onUpdateDriver={onUpdateDriver} />
            )
        } else {
            return <AddNewDriver addDriverToState={addDriverToState} />
        }
    }

    return (
        <div>
            <Header />
            <br />
            {renderDriverForm()}
            {driverCards}
        </div>
    )
}

export default Drivers;
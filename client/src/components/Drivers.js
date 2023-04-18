import React from "react";
import Header from "./Header";


function Drivers({ driverCards }) {

    return (
        <div>
            <Header />
            {driverCards}
        </div>
    )
}

export default Drivers;
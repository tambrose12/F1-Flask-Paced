import React, { useState, useEffect } from "react";
import Stat from "./Stat";
import { useParams } from "react-router-dom";
import Header from "./Header";


function DriverDetail() {

    const [driver, setDriver] = useState("")

    const { id } = useParams()

    useEffect(() => {
        fetch(`/drivers/${id}`)
            .then(r => r.json())
            .then(driver => setDriver(driver))
    }, [id])

    return (
        <div>
            <Header />
            <h1>{driver.name} #{driver.car_number}</h1>
            <img src={driver.driver_image} />
            <h2> Team:{driver.team}</h2>
        </div>
    )
}

export default DriverDetail
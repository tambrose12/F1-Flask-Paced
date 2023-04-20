import React, { useState, useEffect } from "react";
import Stat from "./Stat";
import { useParams } from "react-router-dom";
import Header from "./Header";
import DriverEditForm from "./DriverEditForm";


function DriverDetail({ }) {

    const [driver, setDriver] = useState("")
    const [editForm, setEditForm] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        fetch(`/drivers/${id}`)
            .then(r => r.json())
            .then(driver => setDriver(driver))
    }, [id])

    const handleEditClick = () => {
        setEditForm(!editForm)
    }


    const onUpdateDriver = (updatedDriver) => {
        setDriver(updatedDriver)
    }


    return (
        <div>
            <Header />
            <div className="driverDetail">
                <h1>{driver.name} #{driver.car_number}</h1>
                <img src={driver.driver_image} />
                <h2> Team:{driver.team}</h2>
                <button onClick={handleEditClick}>Click to Edit Driver</button>
            </div>
            {editForm ? <DriverEditForm onUpdateDriver={onUpdateDriver} driverId={driver.id} driver={driver} /> : <div></div>}
        </div>
    )
}

export default DriverDetail
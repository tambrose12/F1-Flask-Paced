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
                <div className="dNameImg">

                    <img src={driver.driver_image} />
                </div>
                <div className="dInfo">
                    <h1>{driver.name} #{driver.car_number}</h1>
                    <br />
                    <h2> Team:{driver.team}</h2>
                    <h2>Podiums: {driver.podiums}</h2>
                    <h2>Country: {driver.country}</h2>
                    <h2>DOB: {driver.dob}</h2>
                </div>
            </div>
            <br />
            <h2 className="h2">About the Driver</h2>
            <p className="bio">{driver.bio}</p>
            <div className="edit">
                <button className="button" onClick={handleEditClick}>Click to Edit Driver</button>
                {editForm ? <DriverEditForm onUpdateDriver={onUpdateDriver} driverId={driver.id} driver={driver} /> : <div></div>}
            </div>
        </div>
    )
}

export default DriverDetail
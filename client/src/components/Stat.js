import React from "react";

function Stat({ stat }) {


    return (
        <tr>
            <td>{stat.driver.name}</td>
            <td>{stat.driver.car_number}</td>
            <td>{parseFloat(stat.time).toFixed(3)}</td>
            <td>{stat.driver.team}</td>
            <td>{stat.race.location}</td>
            <td>{parseFloat(stat.race.fastest_time).toFixed(3)}</td>
        </tr>
    );
}

export default Stat;
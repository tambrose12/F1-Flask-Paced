import React from "react";

function Stat({ stat }) {


    return (
        <tr>
            <td>{stat.driver.name}</td>
            <td>{stat.driver.car_number}</td>
            <td>{stat.time}</td>
            <td>{stat.driver.team}</td>
            <td>{stat.race.location}</td>
            <td>{stat.race.fastest_time}</td>
        </tr>
    );
}

export default Stat;
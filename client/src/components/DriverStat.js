import React from "react";

function DriverStat({driver}) {
    return (
        <tr>
            <td>{driver.id}</td>
            <td>{driver.name}</td>
        </tr>
    )
}

export default DriverStat   
import React from "react";

function RaceStat({race}) {
    return (
        <tr>
            <td>{race.id}</td>
            <td>{race.location}</td>
        </tr>
    )
}

export default RaceStat   
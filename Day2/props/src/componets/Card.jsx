import React from "react";

function Card({ userName = "Rohan" }) {
    return (
        <h2>I am {userName}</h2>
    )
}
export default Card
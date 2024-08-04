import React from "react";
function Nice({ mr = "guys", movie = "Rockey" }) {
    return (
        <>
            <h2 className="text-2xl text-red-300">Nice to meet with you {mr}</h2>
            <p>Do you want to watch the movie {movie} with me?</p>
        </>
    )
}

export default Nice
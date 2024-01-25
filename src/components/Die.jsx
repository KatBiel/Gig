import React, { useState } from "react";

const Die = () => {
    const [number, setNumber] = useState("Click to roll")
    const roll = () => {
        setNumber(Math.floor(Math.random() * (7 - 1) + 1))
    }
    return (
        <button onClick={roll}>{number}</button>
    )
}

export default Die;
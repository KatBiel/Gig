import React, { useState } from "react";

const InputLog = () => {
    const handleInput = (event) => {
        console.log(event.target.value)
    }
    return (
        <>
        <input onChange={handleInput}></input>
        </>
    )
};

export default InputLog;
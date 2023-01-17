import React, { useEffect } from "react";
import "../Counter.css";
import { useState } from "react";

function Counter() {
    let count = 0;

    useEffect(() => {
        window.alert('Counter() called');
    })

    const [currentstate, updatedstate] = useState(count);
    const handleclick = () => {
        updatedstate(currentstate + 1);
    };

    return (
        // <>
            <div className="counter-parent">
                <div className="main-div">
                    <h3>Click below</h3>
                    <button onClick={handleclick}>{currentstate}</button>
                </div>
            </div>
        // </>
    );
}

export default Counter;
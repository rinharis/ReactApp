import React from "react";

const here = "home";

function Hello(props) {

    return (
        <div className="main-header">
            <h2 id="main-header-title">{`Hello ${props.name}, welcome ${here}!`}</h2>
        </div>
    )
}
export default Hello;
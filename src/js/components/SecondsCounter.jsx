import React from "react";

export const SecondsCounter = (props) => {
    return (
        <div>
            <div className="container" id="counter" >
                <div id="number">{props.digito}</div>
            </div>
        </div>
    )
}
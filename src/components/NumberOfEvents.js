// src/components/NumberOfEvents.js

import React from "react";

const NumberOfEvents = ({ events }) => {
    return (
        <div id="number-of-events">
            <input
                type="text"
                className="textbox"
                value={32}
                placeholder="Enter a number"
            />
        </div>
    );
};

export default NumberOfEvents;

// src/components/NumberOfEvents.js

import { useState } from "react";


const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32);

    const handleInputChanged = event => {
        const value = event.target.value;
        setNumber(value);
        
        let errorText;
        if (isNaN(value) || value <= 0 || value > 32) {
            errorText =
                "Please select a whole number from 1 to 32.";
        } else {
            errorText = "";
            setCurrentNOE(value);
        }
        setErrorAlert(errorText);
    };

    return (
        <div id="number-of-events">
            <h4 className="label-text">Events Displayed: </h4>
            <p></p>
            <input
                type="text"
                className="textbox"
                value={number}
                placeholder="Enter a number"
                onChange={handleInputChanged}
            />
        </div>
    );
};


export default NumberOfEvents;

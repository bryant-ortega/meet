// src/components/NumberOfEvents.js

import React from "react";
import Event from "./Event";

const NumberOfEvents = ({ events }) => {
      return (
          <div id="number-of-events">
              <input
                  type="text"
                  className="textbox"
                  placeholder="Enter a number"
                  value={eventNumber}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={handleInputChanged}
              />
              {showSuggestions ? (
                  <ul className="suggestions">
                      {suggestions.map(suggestion => {
                          return (
                              <li onClick={handleItemClicked} key={suggestion}>
                                  {suggestion}
                              </li>
                          );
                      })}
                      <li key="See all cities" onClick={handleItemClicked}>
                          <b>See all cities</b>
                      </li>
                  </ul>
              ) : null}
          </div>
      );
};

export default NumberOfEvents;

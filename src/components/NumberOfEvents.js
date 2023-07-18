// src/components/NumberOfEvents.js

import Event from "./Event";

const NumberOfEvents = ({ events }) => {
    return (
        <ul id="number-of-events">
            {events
                ? events.map(event => <Event key={event.id} event={event} />)
                : null}
        </ul>
    );
};

export default EventList;

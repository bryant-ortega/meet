// src/__tests__/Event.test.js

import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Event from "../components/Event";

const event = {
    kind: "calendar#event",
    etag: '"3181161784712000"',
    id: "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
    status: "confirmed",
    htmlLink:
        "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
    created: "2020-05-19T19:17:46.000Z",
    updated: "2020-05-27T12:01:32.356Z",
    summary: "Learn JavaScript",
    description:
        "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
    location: "London, UK",
    creator: {
        email: "fullstackwebdev@careerfoundry.com",
        self: true,
    },
    organizer: {
        email: "fullstackwebdev@careerfoundry.com",
        self: true,
    },
    start: {
        dateTime: "2020-05-19T16:00:00+02:00",
        timeZone: "Europe/Berlin",
    },
    end: {
        dateTime: "2020-05-19T17:00:00+02:00",
        timeZone: "Europe/Berlin",
    },
    recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
    originalStartTime: {
        dateTime: "2020-05-19T16:00:00+02:00",
        timeZone: "Europe/Berlin",
    },
    iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
    sequence: 0,
    reminders: {
        useDefault: true,
    },
    eventType: "default",
};

describe("<Event /> component", () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event event={event} />);
    });

    test("renders event name", () => {
        expect(screen.getByText(event.summary)).toBeInTheDocument();
    });
    test("renders event location", () => {
        expect(screen.getByText(event.location)).toBeInTheDocument();
    });
    test("renders event details button with the title (show details)", () => {
        expect(screen.getByText("Show Details")).toBeInTheDocument();
    });
    // test("by default, event's details section should be hidden", () => {
    //     expect(
    //         screen.getByText("Have you wondered how you can ask")
    //     ).not.toBeInTheDocument();
    // });
    test("shows the details section when the user clicks on the 'show details' button", () => {
        const showDetailsButton = screen.getByText("Show Details");
        expect(
            screen.queryByText(/Have you wondered how you can ask Google/)
        ).not.toBeInTheDocument();
        fireEvent.click(showDetailsButton);
        expect(
            screen.getByText(/Have you wondered how you can ask/)
        ).toBeInTheDocument();
    });
});

// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
   let EventComponent;
    beforeEach(() => {
      EventComponent = render(<Event event={allEvents[0]} />);
    });
   let allEvents;

  test("renders event's title", () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test("renders event start time", () => {
    expect(EventComponent.queryByText(allEvents[0].start.dateTime)).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.queryByText("description");
    expect(eventDetails).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const showDetails =
        EventComponent.container.querySelector("details-btn");
    await user.click("show details");
    expect(EventComponent.container.querySelector("description")).toBeInTheDocument();

  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();
    const showDetails = EventComponent.container.querySelector("details-btn");
    await user.click("hide details");
    expect(EventComponent.container.querySelector("description")).not.toBeInTheDocument();
  });
});
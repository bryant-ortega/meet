// src/__tests__/App.test.js

import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";

describe("<App /> component", () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    });

    test("renders list of events", () => {
        expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
    });

    test("render CitySearch", () => {
        expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
    });
    test("renders NumberOfEvents component", () => {
        expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();
    });
});

describe("<App /> integration", () => {
    test("renders a list of events matching the city selected by the user", async () => {
        //userEvent is set, and the App component and its DOM are mocked.
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        //A reference to the CitySearch component root DOM node is initialized, then a query is performed to find the city input text box in it.
        const CitySearchDOM = AppDOM.querySelector("#city-search");
        const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

        await user.type(CitySearchInput, "Berlin");
        const berlinSuggestionItem =
            within(CitySearchDOM).queryByText("Berlin, Germany");
        await user.click(berlinSuggestionItem);

        const EventListDom = AppDOM.querySelector("#event-list");
        const allRenderedEventItems =
            within(EventListDom).queryAllByRole("listitem");

        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter(
            event => event.location === "Berlin, Germany"
        );

        expect(allRenderedEventItems.length).toBe(berlinEvents.length);
        allRenderedEventItems.forEach(event => {
            expect(event.textContent).toContain("Berlin, Germany");
        });
    });

    test("user can change the number of events displayed", async () => {
        //userEvent is set, and the App component and its DOM are mocked.
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        //A reference to the NumberOfEvents component root DOM node is initialized, then a query is performed to find the Number Of Events input text box in it.
        const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
        const NumberOfEventsInput =
            within(NumberOfEventsDOM).queryByRole("textbox");

        await user.type(NumberOfEventsInput, "{backspace}{backspace}10");

        const EventListDom = AppDOM.querySelector("#event-list");
        const allRenderedEventItems =
            within(EventListDom).queryAllByRole("listitem");

        expect(allRenderedEventItems.length).toBe(10); 
    });
});

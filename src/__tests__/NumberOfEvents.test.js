import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });
    test("renders element with role of 'textbox'", () => {
        expect(NumberOfEventsComponent.queryByRole("textbox"))
            .toBeInTheDocument;
    });
    test("renders 32 as default value of events", () => {
        expect(NumberOfEventsComponent.querySelector("32")).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents />);
    });
    test("renders element with role of 'textbox'", () => {
        expect(
            NumberOfEventsComponent.queryByRole("textbox")
        ).toBeInTheDocument();
    });
    test("renders 32 as default value of events", () => {
        const numberOfEventsTextBox =
            NumberOfEventsComponent.queryByRole("textbox");
        expect(numberOfEventsTextBox).toHaveValue("32");
    });
    test("state changes when user types a number", async () => {
        const user = userEvent.setup();
        const numberOfEventsTextBox =
            NumberOfEventsComponent.queryByRole("textbox");
        await user.type(numberOfEventsTextBox, "{backspace}{backspace}10");
        expect(numberOfEventsTextBox).toHaveValue("10");
    });
});

// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";
import { mockData } from "../mock-data";


describe("<Event /> component", () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event />);
    });

    test("renders event's name", () => {
        const title = EventComponent.queryByText();
        expect(title).toBeInTheDocumentJ();
    });


});

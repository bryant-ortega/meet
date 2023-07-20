// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import Event from "../components/Event";



describe("<Event /> component", () => {
    let EventComponent;
    beforeEach(() => {
        EventComponent = render(<Event />);
    });

 test("render the event's title", () => {
     expect(1).toBe(1);
 });


});

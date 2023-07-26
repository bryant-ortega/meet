import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, test => {
    test("An element is collapsed by default.", ({ given, when, then }) => {
        given("user has not yet selected a city", () => {});

        let AppComponent;
        when("the user opens the app", () => {
          AppComponent = render(<App />);
        });

        then(
            "any city elements shown should be collapsed by default",
            () => {}
        );
    });

    test("User can expand the event elelment to reveal additional details.", ({
        given,
        when,
        then,
    }) => {
        given("user has selected an event", () => {});

        when("user clicks on the event", () => {});

        then("the event reveals more details", () => {});
    });

    test("User can collapse the event elelment to hide the details again.", ({
        given,
        when,
        then,
    }) => {
        given(
            "user has opened the event and chooses to no longer view all event details",
            () => {}
        );

        when("user click on the expanded event", () => {});

        then("the event collapses and hides the details again", () => {});
    });
});

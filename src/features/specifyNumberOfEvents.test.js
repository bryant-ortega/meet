import { loadFeature, defineFeature } from "jest-cucumber";


const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

// defineFeature(callback => body)

defineFeature(feature, test => {
    test('User hasn`t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('user has not specified a number of events in a city to display', () => {

        });

        when('user selects a city in which to view events', () => {

        });

        then(/^the default number will be (\d+)$/, (arg0) => {

        });
    });

    
    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given(/^user received a list of (\d+) events per selected city$/, (arg0) => {

        });

        when('user wants to see more or less events per city', () => {

        });

        then('user should be able to modify the event number', () => {

        });
    });
});

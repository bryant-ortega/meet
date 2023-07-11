# meet
A serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Key Features:
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.
  
## Feature 1: Filter events by city.

User Story 1:

As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.

SCENARIO 1:  

When user hasn’t searched for a specific city, show upcoming events from all cities.

- Given user hasn’t searched for any city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

SCENARIO 2:

User should see a list of suggestions when they search for a city.

- Given the main page is open;
- When user starts typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.

SCENARIO 3:

User can select a city from the suggested list.

- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., “Berlin, Germany”) from the list;
- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

## Feature 2: Show/Hide Event Details.

User Story 2:

As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.

SCENARIO 1:

An element is collapsed by default.

- Given user has not yet selected a city;
- When user opens the app and does nothing further; 
- Then any city elements shown should be collapsed by default.

SCENARIO 2:

User can expand the event elelment to reveal additional details.

- Given user has selected an event;
- When user clicks on the event; 
- Then the event reveals more details.

SCENARIO 3:

User can collapse the event elelment to hide the details again.

- Given user has opened the event and chooses to no longer view all event details;
- When user click on the expanded event; 
- Then the event collapses and hides the details again.

## Feature 3: Specify Number of Events.

User Story 3:

As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

SCENARIO 1:

When user hasn’t specified a number, 32 is the default number.

- Given user has not specified a number of events in a city to display;
- When user selects a city in which to view events; 
- Then the default number will be 32.
  
SCENARIO 2:

User can change the number of events they want to see.

- Given user received a list of 32 events per selected city;
- When user wants to see more or less events per city; 
- Then they should be able to modify the event number.

## Feature 4: Use the App When Offline.

User Story 4:

As a user, I would like to be able to use the app when offline so that I can see the events Iviewed the last time I was online.

SCENARIO 1:

Show cached data when there’s no internet connection Given the user lost internet connection When the user accesses the app Then chached data should still be available And an error message should appear.

- Given user lost internet connection;
- When user accesses the app; 
- Then chached data should still be available.
  
## Feature 5: Display Charts Visualizing Event Details.

User Story 5:

As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

SCENARIO 1:

Show a chart with the number of upcoming events in each city.

- Given user has not selected a city;
- When the user wants to compare events between cities; 
- Then they should be able to access a chart with the number of upcoming events in each city.
  

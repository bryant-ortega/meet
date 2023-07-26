Feature: Specify Number of Events

 Scenario: User hasn`t specified a number, 32 is the default number.
  Given user has not specified a number of events in a city to display
  When user selects a city in which to view events
  Then the default number will be 32

 Scenario: User can change the number of events they want to see.
  Given user received a list of 32 events per selected city
  When user wants to see more or less events per city
  Then user should be able to modify the event number


Feature: Show/Hide Event Details

 Scenario: An element is collapsed by default.
  Given user has not yet selected a city
  When the user opens the app
  Then any city elements shown should be collapsed by default

 Scenario: User can expand the event elelment to reveal additional details.
  Given user has selected an event
  When user clicks on the event
  Then the event reveals more details

 Scenario: User can collapse the event elelment to hide the details again.
  Given user has opened the event and chooses to no longer view all event details
  When user click on the expanded event
  Then the event collapses and hides the details again

@noOpLogger @withMaxSizeWindow @headless @withCursor @recordFailedRequests @recordPageErrors
Feature: Simple Form
Submit a form on https://reactstrap.github.io/components/form

# use @noOpLogger to deactivate any internal logging
# use @simpleLogger to activate internal logging 
# if you need to create a custom logger : create & configure your logger in loggers/index.ts

Background: Open the form
  Given I open the web site "https://reactstrap.github.io"
  And I open the "Components" page
  And I select the "Form" component

# tag with @live to keep the browser opened at the end of test
# tag with @only to run only this scenario
# tag with both @debug @only to debug this scenario
# tag with @ignore to skip this scenario

Scenario: Submit the Form
  Given I set the field "Email" to "foo@bar.com"
  And I set the field "Password" to "don't tell!"
  And I select "3" in the "Select" list
  #When I submit the form
  #Then the 'Email' field is empty

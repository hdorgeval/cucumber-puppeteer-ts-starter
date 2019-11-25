@noOpLogger @withMaxSizeWindow @headfull @withCursor
Feature: Simple Form
Submit a form on https://reactstrap.github.io/components/form

# use @noOpLogger to deactivate any internal logging
# use @simpleLogger to activate internal logging 
# if you need to create a custom logger : create & configure your logger in loggers/index.ts

Background: Open the form
  Given I open the web site "https://reactstrap.github.io"
  And I click on the 'Components' button
  #And I select the 'Form' component

@debug @only 
Scenario: Submit the Form
  Given I set the field "Email" to "foo@bar.com"
  #And I set the "Paswword" to "don't tell!"
  #And I select '3' in the 'Select' list
  #When I submit the form
  #Then the 'Email' field is empty

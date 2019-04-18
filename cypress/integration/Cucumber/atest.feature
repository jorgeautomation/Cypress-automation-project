#the intellisense is comming because of this plugin
#alexkrechik.cucumberautocomplete

Feature: Test EA feature

  Test EA feature

  Scenario: Test the login feature
    Given I visit EA Site
    When I click login link
    #And I login as user with "admin" and "password"
    Given I login as following
    | userName | Password |
    | admin    | password |
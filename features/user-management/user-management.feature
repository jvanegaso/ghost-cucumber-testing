
Feature: Authentication Management
  As a user I want to authenticate myself within ghost website in order to manage my website

  Scenario: Should login with right user and password

    Given I go to ghost login screen
    When I fill right user and password
    And I try to login
    Then I expect to see the main page

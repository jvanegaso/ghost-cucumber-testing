
Feature: Authentication Management
  As an user I want to authenticate myself within ghost website in order to manage my website

  Scenario Outline: Should show an error message whether user and password are wrong

    Given I go to ghost login screen
    When I fill a <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email     | password  | error                                   |
      | dsadsadsa | dsadsadsa | "Please fill out the form to sign in. " |
      |           | dsadsadsa | "Please fill out the form to sign in. " |
      | dsadsadsa |           | "Please fill out the form to sign in. " |

  Scenario Outline: Should display an error message whether the user clicks on Forgot My Password btn, without email

    Given I go to ghost login screen
    When I fill a <email> and <password>
    And I click on Forgot password button
    Then I expect to see <error>

    Examples:
      | email | password | error                                                 |
      |       |          | "We need your email address to reset your password! " |

  Scenario: Should login with right user and password

    Given I go to ghost login screen
    When I fill right user and password
    And I try to login
    Then I expect to see the main page

  Scenario: Should block the user to go to /site page if session is no longer active

    Given I go to ghost login screen
    When I fill right user and password
    And I try to login
    And I logout from the page
    And I try to go to site page
    Then I expect to see the login page
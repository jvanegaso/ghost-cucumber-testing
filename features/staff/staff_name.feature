Feature: Change Name
  As a user I want to change user name

  Scenario Outline: Should change user name

    Given I login with my user and password
    When I fill the new_user_name
    Then I expect save new name

    Examples:
      | new_user_name |
      | a              | 


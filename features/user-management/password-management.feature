Feature: Password Management
  As a user I want to get different error messages when try to change my password with unsecure patterns or incorrect info

  Scenario Outline: Should show an error in both, Old password and New password inputs, when those values are empty

    Given I login with my user and password
    And go to my profile page
    When I fill the <old_pass>, <new_pass> and <verify_pass>
    And try to update my password
    Then I expect to see (<old_pass_err>) and (<new_pass_err>) messages


    Examples:
      | old_pass | new_pass | verify_pass | old_pass_err                                       | new_pass_err                    |
      |          |          |             | Your current password is required to set a new one | Sorry, passwords can't be blank |


  # Scenario Outline: Should show an error whether the new password and old password doesnt match

  #   Given I login with my user and password
  #   And go to my profile page
  #   When I fill the <old_pass>, <new_pass> and <verify_pass>
  #   And try to update my password
  #   Then I expect to see <verify_pass_err> in the verify pass field

  #   Examples:
  #     | old_pass       | new_pass     | verify_pass        | verify_pass_err                 |
  #     | Dummy Password | New password | Different password | Your new passwords do not match |

  Scenario Outline: Should show an error whether the new password contains less than 10 characters or insecure

    Given I login with my user and password
    And go to my profile page
    When I fill the <old_pass>, <new_pass> and <verify_pass>
    And try to update my password
    Then I expect to see <new_pass_err> in the new pass field

    Examples:
      | old_pass       | new_pass    | verify_pass | new_pass_err                                 |
      | Dummy Password | 123456789   | 123456789   | Password must be at least 10 characters long |
      | Dummy Password | password123 | password123 | Sorry, you cannot use an insecure password   |
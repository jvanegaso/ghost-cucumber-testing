# Feature: Invite user
#   As a user I want to get different error messages when try to invite some to manage website

#   Scenario Outline: Should show an error, new user input, when this value is empty

#     Given I login with my user and password
#     And go to staff user page
#     When I fill the <new_user_email>
#     And try to insert user email
#     Then I expect to see (<new_user_email_err>) messages


#     Examples:
#       | new_user_email | new_user_role | new_user_email_err|
#       | The field can't be null        |          |             | 



Feature: Login

Scenario: Login in Assana
Given I open Assana Login page
When I login with member1
Then I should see the home page

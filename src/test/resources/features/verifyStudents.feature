@test
Feature: As a user i should be able to create a student profile from UI and verify that it displayed on the API
  @api @ui
  Scenario Outline: User able to verify students are exist in both and UI and API by the id number
    Given user lands "http://cybertektraining.com/"
    And user navigates to "Students" tab then "All Students" module
    When user searches students by the batch number "<batch>"
    And user save students ids
    And user sends GET request to "student/batch/"<batch> and accepts content type as "application/json"
    Then user verifies that response status code is 200
    And user verifies that response content type is "application/json;charset=UTF-8"
    And user verifies that students ids match with UI

    Examples:
      | batch |
      | 1     |
      | 2     |
      | 3     |
      | 8     |
      | 9     |
      | 10    |
      | 11    |
      | 12    |

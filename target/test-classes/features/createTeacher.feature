@api @test
Feature: User should be able to create a teacher profile from API and verify that it displayed on the UI
  Also user should not create a teacher profile without batch information

  Background:
    Given user accepts content type as "application/json"

  Scenario: User should be able to create teacher profile and verify status code is 200
    When user sends POST request to "teacher/create" with following information:
      | batch | birthDate  | department | emailAddress      | firstName | gender | joinDate   | lastName | password | phone    | premanentAddress | salary | section | subject |
      | 11    | 11/11/2001 | Computer   | marteen@email.com | Marteen   | male   | 05/16/2020 | Loup     | 12345    | 12345689 | Paris            | 3000   | IT      | Test    |
    Then user verifies that response status code is 200
    And user verifies that response content type is "application/json;charset=UTF-8"

  Scenario: User should not be able to create a teacher profile when 'batch' information is zero in API
    When user sends POST request to "teacher/create" with following information:
      | batch | birthDate  | department | emailAddress   | firstName | gender | joinDate   | lastName | password | phone    | premanentAddress | salary | section | subject |
      | 0     | 11/11/2001 | Maths      | alex@email.com | Alex      | male   | 05/16/2020 | Torr     | 12345    | 12345689 | Paris            | 3000   | IT      | Test    |
    Then user verifies that response status code is 400
    And user verifies that response content type is "application/json;charset=UTF-8"
    And user verifies that response body give "Batch is required! Please add Batch tag." error message

  @ui
  Scenario: User should be able to see in UI to created teacher profile  API
    When user sends POST request to "teacher/create" with following information:
      | batch | birthDate  | department | emailAddress        | firstName | gender | joinDate   | lastName | password | phone    | premanentAddress | salary | section | subject |
      | 5     | 05/11/2001 | Computer   | alexander@email.com | Alexander | male   | 05/16/2020 | Syrup    | 12345    | 12345689 | Paris            | 3000   | IT      | Test    |
    And user lands "http://cybertektraining.com/"
    And user navigates to "Teachers" tab then "All Teacher" module
    And user searches created teacher's id
    Then user verify that created teacher email matches with the API




$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/createTeacher.feature");
formatter.feature({
  "name": "User should be able to create a teacher profile from API and verify that it displayed on the UI",
  "description": "  Also user should not create a teacher profile without batch information",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to create teacher profile and verify status code is 200",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user sends POST request to \"teacher/create\" with following information:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_sends_POST_request_to_with_following_information(java.lang.String,java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to create a teacher profile when \u0027batch\u0027 information is zero in API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "user sends POST request to \"teacher/create\" with following information:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_sends_POST_request_to_with_following_information(java.lang.String,java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response body give \"Batch is required! Please add Batch tag.\" error message",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_body_give_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user accepts content type as \"application/json\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_accepts_content_type_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to see in UI to created teacher profile  API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@test"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.step({
  "name": "user sends POST request to \"teacher/create\" with following information:",
  "rows": [
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_sends_POST_request_to_with_following_information(java.lang.String,java.util.List\u003cjava.util.Map\u003cjava.lang.String, java.lang.Object\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Teachers\" tab then \"All Teacher\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches created teacher\u0027s id",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_searches_created_teacher_s_id()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.cybertekTraining.pages.APIFunctions.getIntegerValueFromBodyPath(APIFunctions.java:40)\r\n\tat com.cybertekTraining.pages.teachers.ActionTeachers.searchCreatedTeachersID(ActionTeachers.java:28)\r\n\tat com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_searches_created_teacher_s_id(TeachersStepDefinitions.java:54)\r\n\tat ✽.user searches created teacher\u0027s id(file:///C:/Users/mkurt/.eclipse/NewTestCybertekApi/src/test/resources/features/createTeacher.feature:30)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user verify that created teacher email matches with the API",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verify_that_created_teacher_email_matches_with_the_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/verifyStudents.feature");
formatter.feature({
  "name": "As a user i should be able to create a student profile from UI and verify that it displayed on the API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.step({
  "name": "user searches students by the batch number \"\u003cbatch\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"\u003cbatch\u003e and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "batch"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "8"
      ]
    },
    {
      "cells": [
        "9"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "11"
      ]
    },
    {
      "cells": [
        "12"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"1 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"2 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"3 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"8\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"8 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"9\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"9 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"10 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"11\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"11 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User able to verify students are exist in both and UI and API by the id number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@api"
    },
    {
      "name": "@ui"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user lands \"http://cybertektraining.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_lands(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Students\" tab then \"All Students\" module",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_navigates_to_tab_then_module(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches students by the batch number \"12\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_searches_students_by_the_batch_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user save students ids",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_save_students_ids()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sends GET request to \"student/batch/\"12 and accepts content type as \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_sends_GET_request_to_and_accepts_content_type_as(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_status_code_is(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that response content type is \"application/json;charset\u003dUTF-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.teachers.TeachersStepDefinitions.user_verifies_that_response_content_type_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that students ids match with UI",
  "keyword": "And "
});
formatter.match({
  "location": "com.cybertekTraining.step_definitions.students.StudentsStepDefinitions.user_verifies_that_students_ids_match_with_UI()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
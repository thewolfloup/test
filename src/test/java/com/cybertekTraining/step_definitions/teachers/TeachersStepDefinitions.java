package com.cybertekTraining.step_definitions.teachers;

import com.cybertekTraining.pages.teachers.Teachers;
import com.cybertekTraining.pages.APIFunctions;
import io.cucumber.java.en.*;


import java.util.List;
import java.util.Map;

import static com.cybertekTraining.pages.teachers.Teachers.getTeachers;

public class TeachersStepDefinitions extends APIFunctions {

    Teachers teachers = getTeachers();

    @Given("user accepts content type as {string}")
    public void user_accepts_content_type_as(String contentType) {
        requestContentType(contentType);
    }

    @When("user sends POST request to {string} with following information:")
    public void user_sends_POST_request_to_with_following_information(String path, List<Map<String,Object>> teacherInfo) {
        POSTRequestListOfMap(path, teacherInfo);
    }

    @Then("user verifies that response status code is {int}")
    public void user_verifies_that_response_status_code_is(int expectedStatusCode) {
        verifyStatusCode(expectedStatusCode);
    }

    @Then("user verifies that response content type is {string}")
    public void user_verifies_that_response_content_type_is(String expectedContentType) {
        verifyContentType(expectedContentType);
    }

    @Then("user verifies that response body give {string} error message")
    public void user_verifies_that_response_body_give_error_message(String expectedMessage) {
        verifyBodyTextMessage(expectedMessage);
    }

    @When("user lands {string}")
    public void user_lands(String url) {
        teachers.action().landURL(url);
    }

    @When("user navigates to {string} tab then {string} module")
    public void user_navigates_to_tab_then_module(String tab, String module) {
        teachers.action().navigateToModule(tab, module);
    }

    @When("user searches created teacher's id")
    public void user_searches_created_teacher_s_id(){
        teachers.action().searchCreatedTeachersID();
    }

    @Then("user verify that created teacher email matches with the API")
    public void user_verify_that_created_teacher_email_matches_with_the_API() {
        teachers.verify().createdEmailMatchWithAPI();
    }
}

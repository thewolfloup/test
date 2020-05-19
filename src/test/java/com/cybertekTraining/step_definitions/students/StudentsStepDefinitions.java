package com.cybertekTraining.step_definitions.students;

import com.cybertekTraining.pages.students.Students;
import com.cybertekTraining.pages.APIFunctions;
import io.cucumber.java.en.*;

import static com.cybertekTraining.pages.students.Students.getStudents;

public class StudentsStepDefinitions extends APIFunctions {

    Students students = getStudents();

    @When("user searches students by the batch number {string}")
    public void user_searches_students_by_the_batch_number(String batch) {
        students.action().searchStudentsByBatchNumber(batch);
    }

    @When("user save students ids")
    public void user_save_students_ids() {
        students.action().saveStudentsIDsAsList();
    }

    @When("user sends GET request to {string}{int} and accepts content type as {string}")
    public void user_sends_GET_request_to_and_accepts_content_type_as(String path, int batchNo, String contentType) {
        GETRequestToPath(path,batchNo,contentType);
    }

    @Then("user verifies that students ids match with UI")
    public void user_verifies_that_students_ids_match_with_UI() {
        students.verify().studentsIDsMatchWithUI();
    }
}

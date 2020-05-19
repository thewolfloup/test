package com.cybertekTraining.pages.students;

import com.cybertekTraining.pages.APIFunctions;

import static org.junit.Assert.assertTrue;

public class VerifyStudents{

    private final ActionStudents actionStudents = new ActionStudents();
    private final APIFunctions apiFunctions = new APIFunctions();

    /*
     * Verifies students IDs match with API and UI
     */
    public void studentsIDsMatchWithUI(){
        for(int i=0; i<actionStudents.saveStudentsIDsAsList().size(); i++) {
            String studentId = String.valueOf(apiFunctions.getIntegerValueFromBodyPath("students.studentId["+i+"]"));

            assertTrue(actionStudents.saveStudentsIDsAsList().contains(String.valueOf(studentId)));
        }
    }
}


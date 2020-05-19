package com.cybertekTraining.pages.students;

import com.cybertekTraining.pages.BasePage;

public class Students extends BasePage {

    private ActionStudents action;
    private VerifyStudents verify;

    public ActionStudents action(){return action;}
    public VerifyStudents verify(){return verify;}

    private Students(){}

    private Students(ActionStudents action, VerifyStudents verify){
        this.action=action;
        this.verify=verify;
    }

    public static Students getStudents(){
        return new Students(new ActionStudents(), new VerifyStudents());
    }


}

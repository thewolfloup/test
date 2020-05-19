package com.cybertekTraining.pages.teachers;

import com.cybertekTraining.pages.BasePage;

public class Teachers extends BasePage {

    private ActionTeachers action;
    private VerifyTeachers verify;

    public ActionTeachers action(){return action;}
    public VerifyTeachers verify(){return verify;}

    private Teachers(){}

    private Teachers(ActionTeachers action, VerifyTeachers verify){
        this.action=action;
        this.verify=verify;
    }

    public static Teachers getTeachers(){
        return new Teachers(new ActionTeachers(), new VerifyTeachers());
    }

}

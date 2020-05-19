package com.cybertekTraining.pages.teachers;

import com.cybertekTraining.pages.BasePage;
import com.cybertekTraining.pages.APIFunctions;
import com.cybertekTraining.utilities.BrowserUtils;
import com.cybertekTraining.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ActionTeachers extends BasePage {

    private final APIFunctions apiFunctions = new APIFunctions();

    //located elements by using page object model
    @FindBy(xpath = "(//*[@class='fa fa-bars'])[2]")
    public WebElement lineByLine;

    @FindBy(xpath = "//*[text()='Teacher ID']/preceding-sibling ::input")
    public WebElement teacherIDInput;

    @FindBy(xpath = "//*[text()=' Search ']")
    public WebElement searchButton;

    /*
     * Goes to website url
     * @param url
     */
    public void landURL(String url){
        Driver.get().get(url);
    }

    /*
     * Searches created teacher ID in UI by saved teacherIDs from API
     */
    public void searchCreatedTeachersID(){
        String teacherId = apiFunctions.getIntegerValueFromBodyPath("teacherId");
        System.out.println("teacherId = " + teacherId);
        BrowserUtils.waitFor(1);
        click(lineByLine);
        BrowserUtils.waitFor(1);
        sendKeysToTextBox(teacherIDInput, String.valueOf(teacherId));
        BrowserUtils.waitFor(1);
        click(searchButton);

    }
}

package com.cybertekTraining.pages.students;

import com.cybertekTraining.pages.BasePage;
import com.cybertekTraining.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ActionStudents extends BasePage {
    //located elements by using page object model
    @FindBy(xpath = "(//*[@class='fa fa-bars'])[2]")
    public WebElement lineByLine;

    @FindBy(xpath = "//*[text()=' Search ']")
    public WebElement searchButton;

    @FindBy(css = "div.form-group.custom-mt-form-group > select")
    public WebElement batchDropdown;

    @FindBy(xpath = "//table/tbody/tr/td[2]")
    public List<WebElement> listOfElementsStudentIDs;

    /*
     * Searches students by their batch number
     * @param batch
     */
    public void searchStudentsByBatchNumber(String batch){
        click(lineByLine);
        selectDropdownElementByText(batchDropdown,batch);
        click(searchButton);
    }

    /*
     * Saves students IDs
     */
    public List<String> saveStudentsIDsAsList(){
        return BrowserUtils.getElementsText(listOfElementsStudentIDs);
    }


}

package com.cybertekTraining.pages.teachers;

import com.cybertekTraining.pages.APIFunctions;
import com.cybertekTraining.utilities.BrowserUtils;
import com.cybertekTraining.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static org.junit.Assert.assertEquals;

public class VerifyTeachers {

    private final APIFunctions apiFunctions = new APIFunctions();

    public void createdEmailMatchWithAPI(){
        String expectedEmail = apiFunctions.getStringValueFromBodyPath("emailAddress");

        String emailPath = "//table/tbody/tr/td[6][text()='"+expectedEmail+"']";
        BrowserUtils.waitFor(3);
        WebElement emailElement = Driver.get().findElement(By.xpath(emailPath));
        String actualEmail = emailElement.getText();

        assertEquals(expectedEmail,actualEmail);
    }

}

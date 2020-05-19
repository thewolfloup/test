package com.cybertekTraining.pages;

import com.cybertekTraining.utilities.BrowserUtils;
import com.cybertekTraining.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public abstract class BasePage {

    public BasePage(){
        PageFactory.initElements(Driver.get(),this);
    }

    @FindBy(css = "li.list-inline-item:nth-of-type(3)")
    public WebElement pageSubtitle;

    public String getPageSubtitle(){
        return pageSubtitle.getText();
    }

    public void click(WebElement element){
        BrowserUtils.waitForClickablility(element, 5);
        BrowserUtils.clickWithJS(element);
    }

    public void sendKeysToTextBox(WebElement element, String text){
        BrowserUtils.waitForVisibility(element, 5);
        element.sendKeys(text);
    }

    public void selectDropdownElementByText(WebElement element, String text){
        BrowserUtils.waitForVisibility(element,5);
        Select select = new Select(element);
        select.selectByVisibleText(text);
    }

    public void navigateToModule(String tab, String module) {
        String tabLocator = "//span[.=' "+tab+"']";
        String moduleLocator = "//a[text()='"+module+"']";
        try {
            BrowserUtils.waitForClickablility(By.xpath(tabLocator), 5);
            WebElement tabElement = Driver.get().findElement(By.xpath(tabLocator));
            new Actions(Driver.get()).moveToElement(tabElement).pause(200).click(tabElement).build().perform();
        } catch (Exception e) {
            BrowserUtils.clickWithWait(By.xpath(tabLocator), 5);
        }
        try {
            BrowserUtils.waitForPresenceOfElement(By.xpath(moduleLocator), 5);
            Driver.get().findElement(By.xpath(moduleLocator)).click();
        } catch (Exception e) {
            BrowserUtils.clickWithTimeOut(Driver.get().findElement(By.xpath(moduleLocator)),  5);
        }
    }
}

package com.cybertekTraining.step_definitions;

import com.cybertekTraining.utilities.ConfigurationReader;
import com.cybertekTraining.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

import static io.restassured.RestAssured.baseURI;

public class Hooks {

    @Before("@api")
    public static void setUpAPI(){
        baseURI = ConfigurationReader.get("cybertek_api_uri");
        System.out.println("Connecting to API");
    }

    @Before("@ui")
    public void setUp(){
        Driver.get().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        Driver.get().manage().window().maximize();
        System.out.println("Connecting to Browser");
    }

    @After("@ui")
    public void tearDownUI(Scenario scenario){
        System.out.println("I am reporting the results");
        //provides screenshoot when step failed
        if (scenario.isFailed()) {
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }

        System.out.println("Closing to Browser");
        Driver.closeDriver();
    }
}

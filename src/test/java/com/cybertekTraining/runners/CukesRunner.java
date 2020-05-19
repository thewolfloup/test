package com.cybertekTraining.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

/*
* This class for execute tests from one place
* mvn -verify  ==> use this code to get Cucumber HTML report and parallel testing
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        //provide report types and rerun files
        plugin = {"json:target/cucumber.json", "html:target/default-html-reports", "rerun:target/rerun.txt"},

        //path of feature files
        features = "src\\test\\resources\\features",

        //path of step definitions
        glue = "com\\cybertekTraining\\step_definitions",

        //allows to work Hooks class; true-> do not run, false-> run
        dryRun = false,

        //execute specific tests
        tags = "@test"
)

public class CukesRunner {
}

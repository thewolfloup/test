package com.cybertekTraining.pages;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

public class APIFunctions {

    public RequestSpecification requestSpecification;
    public static Response response;

    /*
     * request content type to response
     * @param contentType
     */
    public void requestContentType(String contentType){
        requestSpecification = given().contentType(contentType);
    }

    /*
     * send GET to path and request content type to response
     * @param path
     * @param batchNo
     * @param contentType
     */
    public void GETRequestToPath(String path, int batchNo, String contentType){
        response = given().contentType(contentType)
                .when().get(path+batchNo);
    }

    /*
     * send POST request to path saved JSON body
     * @param path
     * @param teachersInfo
     */
    public void POSTRequestListOfMap(String path, List<Map<String, Object>> teachersInfo){
        for (Map<String, Object> teacher : teachersInfo){
            response = requestSpecification.and().body(teacher)
                    .when().post(path);
        }
    }

    /*
     * retrieve specific String value of given json body path
     * @param path
     */
    public String getStringValueFromBodyPath(String path){
        String string = response.body().path(path);
        System.out.println("string " + path + " = "  + string);
        return string;
    }

    /*
     * retrieve specific integer value of given json body path
     * @param path
     */
    public String getIntegerValueFromBodyPath(String path) {
        String integer = response.body().path(path).toString();
        System.out.println("integer " + path + " = " + integer);
        return integer;
    }

    /*
     * verifies status code
     * @param expectedStatusCode
     */
    public void verifyStatusCode(int expectedStatusCode){
        int actualStatusCode = response.statusCode();

        assertEquals(expectedStatusCode, actualStatusCode);
    }

    /*
     * verifies content type
     * @param expectedContentType
     */
    public void verifyContentType(String expectedContentType){
        String actualContentType = response.contentType();

        assertEquals(expectedContentType, actualContentType);
    }

    /*
     * verifies body text message
     * @param expectedMessage
     */
    public void verifyBodyTextMessage(String expectedMessage){
        String actualMessage = getStringValueFromBodyPath("message");

        assertEquals(expectedMessage, actualMessage);
    }

}

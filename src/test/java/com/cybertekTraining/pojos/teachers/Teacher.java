
package com.cybertekTraining.pojos.teachers;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "batch",
    "birthDate",
    "department",
    "emailAddress",
    "firstName",
    "gender",
    "joinDate",
    "lastName",
    "password",
    "phone",
    "premanentAddress",
    "salary",
    "section",
    "subject",
    "teacherId"
})
public class Teacher {

    @JsonProperty("batch")
    private long batch;
    @JsonProperty("birthDate")
    private String birthDate;
    @JsonProperty("department")
    private String department;
    @JsonProperty("emailAddress")
    private String emailAddress;
    @JsonProperty("firstName")
    private String firstName;
    @JsonProperty("gender")
    private String gender;
    @JsonProperty("joinDate")
    private String joinDate;
    @JsonProperty("lastName")
    private String lastName;
    @JsonProperty("password")
    private String password;
    @JsonProperty("phone")
    private String phone;
    @JsonProperty("premanentAddress")
    private String premanentAddress;
    @JsonProperty("salary")
    private long salary;
    @JsonProperty("section")
    private String section;
    @JsonProperty("subject")
    private String subject;
    @JsonProperty("teacherId")
    private long teacherId;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    /**
     * No args constructor for use in serialization
     * 
     */
    public Teacher() {
    }

    /**
     * 
     * @param lastName
     * @param gender
     * @param subject
     * @param batch
     * @param section
     * @param salary
     * @param birthDate
     * @param firstName
     * @param emailAddress
     * @param password
     * @param joinDate
     * @param teacherId
     * @param phone
     * @param department
     * @param premanentAddress
     */
    public Teacher(long batch, String birthDate, String department, String emailAddress, String firstName, String gender, String joinDate, String lastName, String password, String phone, String premanentAddress, long salary, String section, String subject, long teacherId) {
        super();
        this.batch = batch;
        this.birthDate = birthDate;
        this.department = department;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.gender = gender;
        this.joinDate = joinDate;
        this.lastName = lastName;
        this.password = password;
        this.phone = phone;
        this.premanentAddress = premanentAddress;
        this.salary = salary;
        this.section = section;
        this.subject = subject;
        this.teacherId = teacherId;
    }

    @JsonProperty("batch")
    public long getBatch() {
        return batch;
    }

    @JsonProperty("batch")
    public void setBatch(long batch) {
        this.batch = batch;
    }

    @JsonProperty("birthDate")
    public String getBirthDate() {
        return birthDate;
    }

    @JsonProperty("birthDate")
    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    @JsonProperty("department")
    public String getDepartment() {
        return department;
    }

    @JsonProperty("department")
    public void setDepartment(String department) {
        this.department = department;
    }

    @JsonProperty("emailAddress")
    public String getEmailAddress() {
        return emailAddress;
    }

    @JsonProperty("emailAddress")
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    @JsonProperty("firstName")
    public String getFirstName() {
        return firstName;
    }

    @JsonProperty("firstName")
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @JsonProperty("gender")
    public String getGender() {
        return gender;
    }

    @JsonProperty("gender")
    public void setGender(String gender) {
        this.gender = gender;
    }

    @JsonProperty("joinDate")
    public String getJoinDate() {
        return joinDate;
    }

    @JsonProperty("joinDate")
    public void setJoinDate(String joinDate) {
        this.joinDate = joinDate;
    }

    @JsonProperty("lastName")
    public String getLastName() {
        return lastName;
    }

    @JsonProperty("lastName")
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @JsonProperty("password")
    public String getPassword() {
        return password;
    }

    @JsonProperty("password")
    public void setPassword(String password) {
        this.password = password;
    }

    @JsonProperty("phone")
    public String getPhone() {
        return phone;
    }

    @JsonProperty("phone")
    public void setPhone(String phone) {
        this.phone = phone;
    }

    @JsonProperty("premanentAddress")
    public String getPremanentAddress() {
        return premanentAddress;
    }

    @JsonProperty("premanentAddress")
    public void setPremanentAddress(String premanentAddress) {
        this.premanentAddress = premanentAddress;
    }

    @JsonProperty("salary")
    public long getSalary() {
        return salary;
    }

    @JsonProperty("salary")
    public void setSalary(long salary) {
        this.salary = salary;
    }

    @JsonProperty("section")
    public String getSection() {
        return section;
    }

    @JsonProperty("section")
    public void setSection(String section) {
        this.section = section;
    }

    @JsonProperty("subject")
    public String getSubject() {
        return subject;
    }

    @JsonProperty("subject")
    public void setSubject(String subject) {
        this.subject = subject;
    }

    @JsonProperty("teacherId")
    public long getTeacherId() {
        return teacherId;
    }

    @JsonProperty("teacherId")
    public void setTeacherId(long teacherId) {
        this.teacherId = teacherId;
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}


package com.cybertekTraining.pojos.students;

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
    "admissionNo",
    "batch",
    "birthDate",
    "company",
    "contact",
    "firstName",
    "gender",
    "joinDate",
    "lastName",
    "major",
    "password",
    "section",
    "studentId",
    "subject"
})
public class Student {

    @JsonProperty("admissionNo")
    private String admissionNo;
    @JsonProperty("batch")
    private long batch;
    @JsonProperty("birthDate")
    private String birthDate;
    @JsonProperty("company")
    private Company company;
    @JsonProperty("contact")
    private Contact contact;
    @JsonProperty("firstName")
    private String firstName;
    @JsonProperty("gender")
    private String gender;
    @JsonProperty("joinDate")
    private String joinDate;
    @JsonProperty("lastName")
    private String lastName;
    @JsonProperty("major")
    private String major;
    @JsonProperty("password")
    private String password;
    @JsonProperty("section")
    private String section;
    @JsonProperty("studentId")
    private long studentId;
    @JsonProperty("subject")
    private String subject;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    /**
     * No args constructor for use in serialization
     * 
     */
    public Student() {
    }

    /**
     * 
     * @param lastName
     * @param gender
     * @param subject
     * @param batch
     * @param section
     * @param birthDate
     * @param studentId
     * @param firstName
     * @param password
     * @param joinDate
     * @param major
     * @param admissionNo
     * @param contact
     * @param company
     */
    public Student(String admissionNo, long batch, String birthDate, Company company, Contact contact, String firstName, String gender, String joinDate, String lastName, String major, String password, String section, long studentId, String subject) {
        super();
        this.admissionNo = admissionNo;
        this.batch = batch;
        this.birthDate = birthDate;
        this.company = company;
        this.contact = contact;
        this.firstName = firstName;
        this.gender = gender;
        this.joinDate = joinDate;
        this.lastName = lastName;
        this.major = major;
        this.password = password;
        this.section = section;
        this.studentId = studentId;
        this.subject = subject;
    }

    @JsonProperty("admissionNo")
    public String getAdmissionNo() {
        return admissionNo;
    }

    @JsonProperty("admissionNo")
    public void setAdmissionNo(String admissionNo) {
        this.admissionNo = admissionNo;
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

    @JsonProperty("company")
    public Company getCompany() {
        return company;
    }

    @JsonProperty("company")
    public void setCompany(Company company) {
        this.company = company;
    }

    @JsonProperty("contact")
    public Contact getContact() {
        return contact;
    }

    @JsonProperty("contact")
    public void setContact(Contact contact) {
        this.contact = contact;
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

    @JsonProperty("major")
    public String getMajor() {
        return major;
    }

    @JsonProperty("major")
    public void setMajor(String major) {
        this.major = major;
    }

    @JsonProperty("password")
    public String getPassword() {
        return password;
    }

    @JsonProperty("password")
    public void setPassword(String password) {
        this.password = password;
    }

    @JsonProperty("section")
    public String getSection() {
        return section;
    }

    @JsonProperty("section")
    public void setSection(String section) {
        this.section = section;
    }

    @JsonProperty("studentId")
    public long getStudentId() {
        return studentId;
    }

    @JsonProperty("studentId")
    public void setStudentId(long studentId) {
        this.studentId = studentId;
    }

    @JsonProperty("subject")
    public String getSubject() {
        return subject;
    }

    @JsonProperty("subject")
    public void setSubject(String subject) {
        this.subject = subject;
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

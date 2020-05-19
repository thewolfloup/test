
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
    "contactId",
    "emailAddress",
    "phone",
    "premanentAddress"
})
public class Contact {

    @JsonProperty("contactId")
    private long contactId;
    @JsonProperty("emailAddress")
    private String emailAddress;
    @JsonProperty("phone")
    private String phone;
    @JsonProperty("premanentAddress")
    private String premanentAddress;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    /**
     * No args constructor for use in serialization
     * 
     */
    public Contact() {
    }

    /**
     * 
     * @param emailAddress
     * @param contactId
     * @param phone
     * @param premanentAddress
     */
    public Contact(long contactId, String emailAddress, String phone, String premanentAddress) {
        super();
        this.contactId = contactId;
        this.emailAddress = emailAddress;
        this.phone = phone;
        this.premanentAddress = premanentAddress;
    }

    @JsonProperty("contactId")
    public long getContactId() {
        return contactId;
    }

    @JsonProperty("contactId")
    public void setContactId(long contactId) {
        this.contactId = contactId;
    }

    @JsonProperty("emailAddress")
    public String getEmailAddress() {
        return emailAddress;
    }

    @JsonProperty("emailAddress")
    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
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

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    @JsonAnySetter
    public void setAdditionalProperty(String name, Object value) {
        this.additionalProperties.put(name, value);
    }

}

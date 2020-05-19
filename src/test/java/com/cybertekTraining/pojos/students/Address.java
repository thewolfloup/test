
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
    "addressId",
    "city",
    "state",
    "street",
    "zipCode"
})
public class Address {

    @JsonProperty("addressId")
    private long addressId;
    @JsonProperty("city")
    private String city;
    @JsonProperty("state")
    private String state;
    @JsonProperty("street")
    private String street;
    @JsonProperty("zipCode")
    private long zipCode;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    /**
     * No args constructor for use in serialization
     * 
     */
    public Address() {
    }

    /**
     * 
     * @param zipCode
     * @param city
     * @param street
     * @param state
     * @param addressId
     */
    public Address(long addressId, String city, String state, String street, long zipCode) {
        super();
        this.addressId = addressId;
        this.city = city;
        this.state = state;
        this.street = street;
        this.zipCode = zipCode;
    }

    @JsonProperty("addressId")
    public long getAddressId() {
        return addressId;
    }

    @JsonProperty("addressId")
    public void setAddressId(long addressId) {
        this.addressId = addressId;
    }

    @JsonProperty("city")
    public String getCity() {
        return city;
    }

    @JsonProperty("city")
    public void setCity(String city) {
        this.city = city;
    }

    @JsonProperty("state")
    public String getState() {
        return state;
    }

    @JsonProperty("state")
    public void setState(String state) {
        this.state = state;
    }

    @JsonProperty("street")
    public String getStreet() {
        return street;
    }

    @JsonProperty("street")
    public void setStreet(String street) {
        this.street = street;
    }

    @JsonProperty("zipCode")
    public long getZipCode() {
        return zipCode;
    }

    @JsonProperty("zipCode")
    public void setZipCode(long zipCode) {
        this.zipCode = zipCode;
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

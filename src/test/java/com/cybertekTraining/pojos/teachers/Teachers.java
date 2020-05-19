
package com.cybertekTraining.pojos.teachers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "teachers"
})
public class Teachers {

    @JsonProperty("teachers")
    private List<Teacher> teachers = null;
    @JsonIgnore
    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    /**
     * No args constructor for use in serialization
     * 
     */
    public Teachers() {
    }

    /**
     * 
     * @param teachers
     */
    public Teachers(List<Teacher> teachers) {
        super();
        this.teachers = teachers;
    }

    @JsonProperty("teachers")
    public List<Teacher> getTeachers() {
        return teachers;
    }

    @JsonProperty("teachers")
    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
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

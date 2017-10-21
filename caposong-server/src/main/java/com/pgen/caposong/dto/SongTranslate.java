package com.pgen.caposong.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class SongTranslate {
    @JsonProperty("lang")
    private String lang;
    @JsonProperty("lyrics")
    private List<String> lyrics;
}

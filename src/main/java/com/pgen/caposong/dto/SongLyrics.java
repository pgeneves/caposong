package com.pgen.caposong.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown=true)
public class SongLyrics {
    @JsonUnwrapped
    private Song songItem;
    @JsonProperty("lyrics")
    private List<String> lyrics;

    public List<String> getLyrics() {
        return lyrics;
    }

    public void setSongItem(Song songItem) {
        this.songItem = songItem;
    }

    public void setLyrics(List<String> lyrics) {
        this.lyrics = lyrics;
    }

    public Song getSongItem() {
        return songItem;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SongLyrics that = (SongLyrics) o;

        return songItem.equals(that.songItem);

    }

    @Override
    public int hashCode() {
        return songItem.hashCode();
    }
}

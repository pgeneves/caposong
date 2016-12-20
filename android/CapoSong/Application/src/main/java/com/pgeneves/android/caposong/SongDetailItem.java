package com.pgeneves.android.caposong;

import java.io.Serializable;
import java.util.List;

/**
 * Created by phil on 09/12/2016.
 */

public class SongDetailItem implements Serializable {
    private int id;
    private String name;
    private List<String> lyrics;
    private List<SongTranslate> translate;

    public SongDetailItem(int id, String title) {
        this.id = id;
        this.name = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getLyrics() {
        return lyrics;
    }

    public void setLyrics(List<String> lyrics) {
        this.lyrics = lyrics;
    }

    public List<SongTranslate> getTranslate() {
        return translate;
    }

    public void setTranslate(List<SongTranslate> translate) {
        this.translate = translate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SongDetailItem songItem = (SongDetailItem) o;

        if (id != songItem.id) return false;
        return name != null ? name.equals(songItem.name) : songItem.name == null;

    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return name;
    }
}

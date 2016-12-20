package com.pgeneves.android.caposong;

import java.io.Serializable;
import java.util.List;

/**
 * Created by phil on 09/12/2016.
 */

public class SongTranslate implements Serializable {
    private String lang;
    private List<String> lyrics;

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public List<String> getLyrics() {
        return lyrics;
    }

    public void setLyrics(List<String> lyrics) {
        this.lyrics = lyrics;
    }
}

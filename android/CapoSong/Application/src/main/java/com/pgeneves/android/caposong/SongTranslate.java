package com.pgeneves.android.caposong;

import java.io.Serializable;
import java.util.List;

/**
 * Created by phil on 09/12/2016.
 */

public class SongTranslate implements Serializable {
    private String langKey;
    private List<String> lyrics;

    public String getLangKey() {
        return langKey;
    }

    public void setLangKey(String langKey) {
        this.langKey = langKey;
    }

    public List<String> getLyrics() {
        return lyrics;
    }

    public void setLyrics(List<String> lyrics) {
        this.lyrics = lyrics;
    }
}

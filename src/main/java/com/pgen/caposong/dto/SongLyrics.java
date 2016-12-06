package com.pgen.caposong.dto;

import java.util.List;

public class SongLyrics {
    private final Song songItem;
    private final List<String> lyrics;

    public SongLyrics(Song songItem, List<String> lyrics) {
        this.songItem = songItem;
        this.lyrics = lyrics;
    }

    public List<String> getLyrics() {
        return lyrics;
    }

    public Song getSongItem() {
        return songItem;
    }
}

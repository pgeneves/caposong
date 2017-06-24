package com.pgen.caposong.services;

import com.pgen.caposong.dto.Song;
import com.pgen.caposong.dto.SongLyrics;

import java.util.List;

public interface ISongService {
    List<Song> getSongs();

    SongLyrics getSong(String songUid);

    String getSongMusicPath(String songUid);
}

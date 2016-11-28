package com.pgen.caposong.services;

import com.pgen.caposong.dto.Song;

import java.util.List;

public interface ISongService {
    List<Song> getSongs();

    Song getSong(int songId);

}

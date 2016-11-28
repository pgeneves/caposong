package com.pgen.caposong.services;

import com.pgen.caposong.dto.Song;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SongService implements ISongService {
    @Override
    public List<Song> getSongs() {
        List<Song> songs = new ArrayList<>();
        songs.add(new Song(0, "E de yoyo"));
        songs.add(new Song(1, "Beira mar"));
        return songs;
    }

    @Override
    public Song getSong(int songId) {
        return null;
    }
}

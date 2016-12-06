package com.pgen.caposong.services;

import com.pgen.caposong.dto.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

@Service
public class SongService implements ISongService {
    private AtomicReference<List<Song>> songCache = new AtomicReference<>();

    @Autowired
    SongFileLoader songDao;


    @Override
    public List<Song> getSongs() {
        List<Song> songs = new ArrayList<>();
        songs.addAll(songCache.get());
        return songs;
    }

    @Override
    public Song getSong(int songId) {
        return null;
    }

    private void ensureSongCache() {
        if (songCache.get() == null) {
            songCache.set(songDao.loadAllSongs());
        }
    }
}

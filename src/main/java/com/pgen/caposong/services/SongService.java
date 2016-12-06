package com.pgen.caposong.services;

import com.pgen.caposong.dto.Song;
import com.pgen.caposong.dto.SongLyrics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
public class SongService implements ISongService {
    private final boolean dynamic = true;
    private AtomicReference<List<SongLyrics>> songCache = new AtomicReference<>();

    @Autowired
    SongFileLoader songDao;

    @PostConstruct
    public void preLoad() {
        ensureSongCache();
    }

    @Override
    public List<Song> getSongs() {
        ensureSongCache();
        List<Song> songs = new ArrayList<>();
        songs.addAll(songCache.get().stream().map(song -> song.getSongItem()).collect(Collectors.toList()));
        return songs;
    }

    @Override
    public SongLyrics getSong(int songId) {
        ensureSongCache();
        for (SongLyrics song : songCache.get()) {
            if (song.getSongItem().getId() == songId) {
                return song;
            }
        }
        return null;
    }

    private void ensureSongCache() {
        if ((dynamic) || songCache.get() == null) {
            songCache.set(songDao.loadAllSongs());
        }
    }
}

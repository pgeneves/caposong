package com.pgen.caposong.services;

import com.pgen.caposong.dto.Song;
import com.pgen.caposong.dto.SongLyrics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service("songService")
public class SongService implements ISongService {
    // Not here to stay, for dev wip
    private final boolean dynamic = true;
    private AtomicReference<Set<SongLyrics>> songCache = new AtomicReference<>();

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
    public SongLyrics getSong(String songUid) {
        ensureSongCache();
        return findSong(songUid);
    }

    @Override
    public String getSongMusicPath(String songUid) {
        // TODO refactor to make it cleaner
        SongLyrics songLyrics = findSong(songUid);
        if ((songLyrics != null) && songLyrics.getSongItem().getMusic() != null) {
            return songLyrics.getSongItem().getMusic();
        }
        return "";
    }

    private void ensureSongCache() {
        if ((dynamic) || songCache.get() == null) {
            songCache.set(songDao.loadAllSongs());
        }
    }

    private SongLyrics findSong(String songUid) {
        for (SongLyrics song : songCache.get()) {
            if (song.getSongItem().getUid().equals(songUid)) {
                return song;
            }
        }
        return null;
    }
}

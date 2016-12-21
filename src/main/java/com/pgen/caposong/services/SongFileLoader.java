package com.pgen.caposong.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pgen.caposong.dto.SongLyrics;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@Service
public class SongFileLoader {
    public Set<SongLyrics> loadAllSongs() {
        int generatedId = 0;
        ObjectMapper jsonMapper = new ObjectMapper();
        Set<SongLyrics> songs = new HashSet<>();
        Set<String> seenNames = new HashSet<>();
        for (Iterator<File> it = FileUtils.iterateFiles(new File("song_data"),
                new String[]{"json"}, false); it.hasNext(); ) {
            // Load file content as a JSON object
            try {
                // deserialize contents of each file into an object of type
                SongLyrics song = jsonMapper.readValue(it.next(), SongLyrics.class);
                song.getSongItem().setId(generatedId++);
                // If a song already exist with same name, suffix it
                int suffix = 0;
                while (seenNames.contains(song.getSongItem().getName())) {
                    song.getSongItem().setName(song.getSongItem().getName() + " (" + suffix + ")");
                    suffix++;
                }
                seenNames.add(song.getSongItem().getName());
                songs.add(song);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return songs;
    }
}

package com.pgen.caposong.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pgen.caposong.dto.Song;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class SongFileLoader {
    public List<Song> loadAllSongs() {
        ObjectMapper jsonMapper = new ObjectMapper();
        List<Song> songs = new ArrayList<>();
        for (Iterator<File> it = FileUtils.iterateFiles(new File("song_data"),
                new String[]{"json"}, false); it.hasNext();) {
            // Load file content as a JSON object
            try {
                // deserialize contents of each file into an object of type
                Song song = jsonMapper.readValue(it.next(), new TypeReference<Song>() {});
                songs.add(song);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return songs;
    }
}

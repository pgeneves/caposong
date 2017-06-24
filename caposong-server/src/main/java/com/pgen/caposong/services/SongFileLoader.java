package com.pgen.caposong.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pgen.caposong.dto.SongLyrics;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

@Service
public class SongFileLoader {
    public Set<SongLyrics> loadAllSongs() {
        ObjectMapper jsonMapper = new ObjectMapper();
        Set<SongLyrics> songs = new HashSet<>();
        Set<String> seenNames = new HashSet<>();
        for (Iterator<File> it = FileUtils.iterateFiles(new File("song_data"),
                new String[]{"json"}, false); it.hasNext(); ) {
            // Load file content as a JSON object
            try {
                // deserialize contents of each file into an object of type
                SongLyrics song = jsonMapper.readValue(it.next(), SongLyrics.class);
                // If a song already exist with same name, suffix it
                int suffix = 0;
                while (seenNames.contains(song.getSongItem().getName())) {
                    song.getSongItem().setName(song.getSongItem().getName() + " (" + suffix + ")");
                    suffix++;
                }
                seenNames.add(song.getSongItem().getName());
                // Generate a stable UID based on the name (for client local storage)
                song.getSongItem().setUid(generateUid(song.getSongItem().getName()));
                songs.add(song);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return songs;
    }

    private String generateUid(String name) {
        MessageDigest digest = null;
        try {
            digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(name.getBytes(StandardCharsets.UTF_8));
            return Hex.encodeHexString(hash);
        } catch (NoSuchAlgorithmException e) {
            // TODO Find a better fallback or use an early check
            throw new RuntimeException("SHA256 provider not found", e);
        }
    }


}

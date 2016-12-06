package com.pgen.caposong.rest;

import com.pgen.caposong.dto.Song;
import com.pgen.caposong.dto.SongLyrics;
import com.pgen.caposong.services.ISongService;
import com.pgen.caposong.services.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/song-data")
public class CapoSongController {

    @Autowired
    SongService songService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Song> listAllUsers() {
        return songService.getSongs();
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public SongLyrics getUser() {
        return songService.getSong(0);
    }
}

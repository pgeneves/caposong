package com.pgeneves.android.caposong;

import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageButton;
import android.widget.ListView;
import android.widget.TextView;

import com.google.gson.Gson;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by phil on 18/12/2016.
 */
public class SongDetailFragment extends Fragment {
    private LocalStorageHandler localStorageHandler;
    private MediaPlayer mPlayer;
    private boolean isPlaying = false;
    private SongItem item;
    private String langKey;
    private String musicPath;
    private SongDetailItem detailItem;
    private View view;
    private List<String> songLyrics = new ArrayList<>();
    private ArrayAdapter<String> adapterItems;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        item = (SongItem) getArguments().getSerializable("item");
        langKey = (String) getArguments().getSerializable("langKey");
        adapterItems = new ArrayAdapter<String>(getActivity(),
                R.layout.lyrics_item, R.id.lyrics_content, songLyrics);
        //
        localStorageHandler = new LocalStorageHandler(this.getActivity().getFilesDir());
        //
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_song_detail,
                container, false);
        // Add listener on button click
        ImageButton buttonView = (ImageButton) view.findViewById(R.id.button);
        buttonView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                toggleSongPlayer();
            }
        });

        // Bind adapter to ListView
        ListView listView = (ListView) view.findViewById(R.id.SongLyrics);
        listView.setAdapter(adapterItems);
        // Invoke async load content
        loadContent();
        return view;
    }

    @Override
    public void onDestroyView() {
        disposeMediaPlayer();
        super.onDestroyView();
    }

    public static SongDetailFragment newInstance(SongItem item, String langKey) {
        SongDetailFragment fragmentDemo = new SongDetailFragment();
        Bundle args = new Bundle();
        args.putSerializable("item", item);
        args.putSerializable("langKey", langKey);
        fragmentDemo.setArguments(args);
        return fragmentDemo;
    }

    private void toggleSongPlayer() {
        if (isPlaying) {
            mPlayer.stop();
            isPlaying=false;
        } else {
            launchMediaPlayer();
        }
    }

    private void launchMediaPlayer() {
        if (musicPath == null) {
            return;
        }
        try {
            if (mPlayer == null) {
                // factory method already serve a prepared player
                Uri mediaUri = Uri.parse(localStorageHandler.getSongAudioPath(item.getUid()));
                mPlayer = MediaPlayer.create(this.getActivity(), mediaUri);
//                mPlayer = MediaPlayer.create(this.getActivity(), R.raw.jogodedentro);
            } else {
                // But once it has been stopped, we need to prepare again
                mPlayer.prepare();
            }
            mPlayer.setLooping(true);
            mPlayer.start();
            isPlaying = true;
        } catch (IOException e) {
            e.printStackTrace();
            disposeMediaPlayer();
        }
    }

    private void disposeMediaPlayer() {
        if (mPlayer != null) {
            try {
                mPlayer.stop();
                mPlayer.release();
            } finally {
                mPlayer = null;
                isPlaying = false;
            }
        }
    }

    private void loadContent() {
        // Create a default item
        detailItem = new SongDetailItem(0, "loading...", null);
        //
        loadLocalContent();
        // Use a first view refresh with local content or empty
        refreshView();
        // Try a network download
        // It should be triggered only from a version change in the catalog
        loadRemoteContent();
    }

    private void loadLocalContent() {
        // Load from the local storage in case of network access slowness
        String localContent = localStorageHandler.readLocalSongContent(item.getUid());
        if (localContent != null) {
            try {
                detailItem = parseSongDetails(localContent);
            } catch (Exception ex) {
                ex.printStackTrace();
                System.out.println("Error while parsing JSON " + localContent);
            }
            // Initialize music from local storage if present
            if (localStorageHandler.isLocalSongAudioAvailable(item.getUid())) {
                // TODO Add a way to invalidate a local storage
                musicPath = detailItem.getMusic();
            } else {
                musicPath = null;
            }
        }
    }

    private void loadRemoteContent() {
        new DownloadTask(new IAsyncResourceHandler() {
            @Override
            public void handleAsyncResult(String result) {
                try {
                    detailItem =  parseSongDetails(result);
                    // On success store into local content
                    localStorageHandler.writeLocalSongContent(result, item.getUid());
                    // Download the file if it was not present
                    backgroundLoadMusic();
                } catch (Exception ex) {
                    // No re-scheduling of load because it is worthless; Will try again on next acess
                    ex.printStackTrace();
                    System.out.println("Error while parsing JSON " + result);
                }
                refreshView();
            }
        }).execute("https://caposong.herokuapp.com/song-data/get?uid=" + item.getUid());
    }

    private SongDetailItem parseSongDetails(String jsonContent) throws Exception {
        Gson gson = new Gson();
        return gson.fromJson(jsonContent, SongDetailItem.class);
    }

    private void backgroundLoadMusic() {
        if (detailItem.getMusic() != null && detailItem.getMusic().length() > 0) {
            // TODO Add a way to invalidate a local storage
            if (!localStorageHandler.isLocalSongAudioAvailable(item.getUid())) {
                new DownloadFileTask(this.localStorageHandler, new IAsyncResourceHandler() {
                    @Override
                    public void handleAsyncResult(String result) {
                        if ("true".equalsIgnoreCase(result)) {
                            musicPath = detailItem.getMusic();
                        } else {
                            musicPath = null;
                        }
                    }
                }).execute("https://caposong.herokuapp.com/song_music/" + detailItem.getMusic(),
                        item.getUid());
            }
        }
    }

    private void refreshView() {
        TextView songTitle = (TextView) view.findViewById(R.id.songTitle);
        songTitle.setText(detailItem.getName());
        populateLyrics();
        adapterItems.notifyDataSetChanged();
        view.requestLayout();
    }

    private void populateLyrics() {
        songLyrics.clear();
        // Search for a potential translation
        List<String> translatedLyrics = null;
        for (SongTranslate translation : detailItem.getTranslate()) {
            if (translation.getLang().equals(langKey)) {
                translatedLyrics = translation.getLyrics();
            }
        }
        // First the song lyrics
        for (String sentence : detailItem.getLyrics()) {
            songLyrics.add(sentence);
        }
        // If a translation exist, display it after
        if (translatedLyrics != null) {
            songLyrics.add("");
            songLyrics.add("");
            songLyrics.add("");
            for (String sentence : translatedLyrics) {
                songLyrics.add(sentence);
            }
        }
        // Always add up some 10 lines to avoid important text hidden by Pastinha
        for (int i=0; i<10; i++) {
            songLyrics.add("");
        }
    }
}
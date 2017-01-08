package com.pgeneves.android.caposong;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
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
    private MediaPlayer mPlayer;
    private boolean isPlaying = false;
    private SongItem item;
    private String langKey;
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
        try {
            if (mPlayer == null) {
                // factory method already serve a prepared player
                mPlayer = MediaPlayer.create(this.getActivity(), R.raw.jogodedentro);
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
        new DownloadTask(new IAsyncResourceHandler() {
            @Override
            public void handleAsyncResult(String result) {
                Gson gson = new Gson();
                detailItem = gson.fromJson(result, SongDetailItem.class);
                refreshView();
            }
        }).execute("https://caposong.herokuapp.com/song-data/get?uid=" + item.getUid());
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
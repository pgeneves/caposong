package com.pgeneves.android.caposong;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Spinner;
import android.widget.TextView;

import com.google.gson.Gson;

/**
 * Created by phil on 18/12/2016.
 */

public class SongDetailFragment extends Fragment {
    private String currentSelectedLang = "fr";
    private SongItem item;
    private SongDetailItem detailItem;
    private View view;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        item = (SongItem) getArguments().getSerializable("item");
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        view = inflater.inflate(R.layout.fragment_item_detail,
                container, false);
        // Invoke async load content
        loadContent();
        //
        return view;
    }

    // SongDetailFragment.newInstance(item)
    public static SongDetailFragment newInstance(SongItem item) {
        SongDetailFragment fragmentDemo = new SongDetailFragment();
        Bundle args = new Bundle();
        args.putSerializable("item", item);
        fragmentDemo.setArguments(args);
        return fragmentDemo;
    }

    private void loadContent() {
        new DownloadTask(new IAsyncResourceHandler() {
            @Override
            public void handleAsyncResult(String result) {
                Gson gson = new Gson();
                detailItem = gson.fromJson(result, SongDetailItem.class);
                refreshView();
            }
        }).execute("https://caposong.herokuapp.com/song-data/get?id="+item.getId());
    }

    private void refreshView() {
        TextView songTitle = (TextView) view.findViewById(R.id.songTitle);
        TextView songLyrics = (TextView) view.findViewById(R.id.songLyrics);
        songTitle.setText(detailItem.getName());
        StringBuilder sb = new StringBuilder();
        for (String sentence : detailItem.getLyrics()) {
            sb.append(sentence).append("\n");
        }
        songLyrics.setText(sb.toString());
        view.requestLayout();
    }
}
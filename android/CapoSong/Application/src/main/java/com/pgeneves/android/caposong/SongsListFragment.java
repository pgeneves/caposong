package com.pgeneves.android.caposong;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Spinner;
import android.widget.TextView;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * Created by phil on 18/12/2016.
 */
public class SongsListFragment extends Fragment {
    List<String> langsLabel = Arrays.asList("Français","Portuguêse","English");
    List<String> langsKey = Arrays.asList("fr","pt","en");

    private List<SongItem> songList = new ArrayList<>();
    private ArrayAdapter<SongItem> adapterItems;
    private ListView lvItems;
    private String selectedLangKey;
    private String filterText="";
    private SongItem[] loadedSongs = new SongItem[0];

    private OnItemSelectedListener listener;

    public interface OnItemSelectedListener {
        public void onItemSelected(SongItem i);
    }

    @Override
    public void onAttach(Activity activity) {
        super.onAttach(activity);
        if (activity instanceof OnItemSelectedListener) {
            listener = (OnItemSelectedListener) activity;
        } else {
            throw new ClassCastException(activity.toString()
                    + " must implement ItemsListFragment.OnItemSelectedListener");
        }
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        System.out.println("onCreate");
        super.onCreate(savedInstanceState);
        adapterItems = new ArrayAdapter<SongItem>(getActivity(),
                R.layout.lits_black_text, R.id.list_content, songList);
//        adapterItems = new ArrayAdapter<SongItem>(getActivity(),
//                R.layout.lits_black_text, android.R.layout.simple_list_item_activated_1, songList);
        loadContent();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        System.out.println("onCreateView");
        // Inflate view
        View view = inflater.inflate(R.layout.fragment_songs_list, container,
                false);

        selectedLangKey = loadLanguage();

        EditText searchText = (EditText) view.findViewById(R.id.searchText);
        searchText.setText("");
        searchText.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {

            }

            @Override
            public void onTextChanged(CharSequence s, int start, int before, int count) {

            }

            @Override
            public void afterTextChanged(Editable s) {
                filterText = s.toString();
                refreshListView();
            }
        });

        Spinner spinner = (Spinner) view.findViewById(R.id.lang_spinner);
        ArrayAdapter<String> spinnerAdapter = new ArrayAdapter<String>(getActivity(),
                android.R.layout.simple_spinner_item, langsLabel);
        spinner.setAdapter(spinnerAdapter); // set the adapter to provide layout of rows and content
        spinner.setSelection(langsKey.indexOf(selectedLangKey));
        spinner.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                setLanguage(langsKey.get(position));
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {
                setDefaultLanguage();
            }
        });

        // Bind adapter to ListView
        lvItems = (ListView) view.findViewById(R.id.lvItems);
        lvItems.setAdapter(adapterItems);
        lvItems.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View item, int position,
                                    long rowId) {
                // Retrieve item based on position
                SongItem i = adapterItems.getItem(position);
                // Fire selected event for item
                listener.onItemSelected(i);
            }
        });
        return view;
    }

    private void setDefaultLanguage() {
        setLanguage(langsKey.get(0));
    }

    private void setLanguage(String langKey) {
        System.out.println("setLanguage "+langKey);
        selectedLangKey = langKey;
        SharedPreferences sharedPref = getActivity().getPreferences(Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPref.edit();
        editor.putString("langKey", langKey);
        editor.commit();
    }

    private String loadLanguage() {
        SharedPreferences sharedPref = getActivity().getPreferences(Context.MODE_PRIVATE);
        if (sharedPref.contains("langKey")) {
            String savedLang = sharedPref.getString("langKey", langsKey.get(0));
            if (langsKey.contains(savedLang)) {
                return savedLang;
            }
        }
        return langsKey.get(0);
    }

    public String getSelectedLangKey() {
        return selectedLangKey;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.refresh_action:
                loadContent();
                return true;
        }
        return false;
    }

    private void refreshListView() {
        songList.clear();
        for (SongItem itm : loadedSongs) {
            if ((filterText != null) && (!"Search".equalsIgnoreCase(filterText))
                    && filterText.trim().length() > 0) {
                if (!itm.getName().toLowerCase().contains(filterText.toLowerCase())) {
                    continue;
                }
            }
            songList.add(itm);
        }
        adapterItems.notifyDataSetChanged();
    }

    private void loadContent() {
        new DownloadTask(new IAsyncResourceHandler() {
            @Override
            public void handleAsyncResult(String result) {
                songList.clear();
                try {
                    Gson gson = new Gson();
                    loadedSongs = gson.fromJson(result, SongItem[].class);
                } catch(Exception ex) {
                    loadedSongs = new SongItem[0];
                    ex.printStackTrace();
                    System.out.println("Error while parsing JSON "+result);
                    // Schedule a reload
                    ScheduledExecutorService executorService = Executors.newScheduledThreadPool(1);
                    executorService.schedule(new Callable<Boolean>() {
                        @Override
                        public Boolean call() throws Exception {
                            loadContent();
                            return true;
                        }
                    }, 10, TimeUnit.SECONDS);
                }
                refreshListView();
            }
        }).execute("https://caposong.herokuapp.com/song-data/list");
    }

    /**
     * Turns on activate-on-click mode. When this mode is on, langsLabel items will be
     * given the 'activated' state when touched.
     */
    public void setActivateOnItemClick(boolean activateOnItemClick) {
        // When setting CHOICE_MODE_SINGLE, ListView will automatically
        // give items the 'activated' state when touched.
        lvItems.setChoiceMode(
                activateOnItemClick ? ListView.CHOICE_MODE_SINGLE
                        : ListView.CHOICE_MODE_NONE);
    }

}

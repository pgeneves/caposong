package com.pgeneves.android.caposong;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;

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

    private LocalStorageHandler localStorageHandler;
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
                R.layout.list_item, R.id.list_content, songList);
        //
        localStorageHandler = new LocalStorageHandler(this.getActivity().getFilesDir());
        //
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

    void setLanguage(String langKey) {
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

    void loadContent() {
        songList.clear();
        // Load from the local storage in case of network access slowness
        String localCatalog = localStorageHandler.readLocalSongCatalog();
        if (localCatalog != null) {
            try {
                loadedSongs = parseSongCatalog(localCatalog);
            } catch (Exception ex) {
                loadedSongs = new SongItem[0];
                ex.printStackTrace();
                System.out.println("Error while parsing JSON " + localCatalog);
            }
        }
        // Use a first view refresh with local catalog or empty
        refreshListView();

        new DownloadTask(new IAsyncResourceHandler() {
            @Override
            public void handleAsyncResult(String result) {
                try {
                    // Update view only on success
                    loadedSongs = parseSongCatalog(result);
                    refreshListView();
                    // And then store result to local storage
                    localStorageHandler.writeLocalSongCatalog(result);
                } catch(Exception ex) {
//                    loadedSongs = new SongItem[0];
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
            }
        }).execute("https://caposong.herokuapp.com/song-data/list");
    }

    private SongItem[] parseSongCatalog(String jsonCatalog) throws Exception {
        Gson gson = new Gson();
        return gson.fromJson(jsonCatalog, SongItem[].class);
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

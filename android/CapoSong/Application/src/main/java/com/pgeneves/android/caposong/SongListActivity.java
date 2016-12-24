package com.pgeneves.android.caposong;

import android.app.ActionBar;
import android.content.Intent;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SubMenu;
import android.widget.FrameLayout;

/**
 * Created by phil on 18/12/2016.
 */

public class SongListActivity extends AppCompatActivity implements SongsListFragment.OnItemSelectedListener {
    private boolean isTwoPane = false;
    private SongsListFragment fragmentItemsList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_items);
        determinePaneLayout();
    }

    private void determinePaneLayout() {
        fragmentItemsList = (SongsListFragment) getSupportFragmentManager().findFragmentById(R.id.SongsListFragment);
        FrameLayout fragmentItemDetail = (FrameLayout) findViewById(R.id.flDetailContainer);
        if (fragmentItemDetail != null) {
            isTwoPane = true;
            fragmentItemsList.setActivateOnItemClick(true);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.songs, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.refresh_action:
                fragmentItemsList.loadContent();
                return true;
            case R.id.lang_fr:
                fragmentItemsList.setLanguage("fr");
                return true;
            case R.id.lang_pt:
                fragmentItemsList.setLanguage("pt");
                return true;
            case R.id.lang_en:
                fragmentItemsList.setLanguage("en");
                return true;
        }
        return false;
    }

    @Override
    public void onItemSelected(SongItem item) {
        if (isTwoPane) { // single activity with langsLabel and detail
            // Replace frame layout with correct detail fragment
            SongDetailFragment fragmentItem = SongDetailFragment.newInstance(item,
                    fragmentItemsList.getSelectedLangKey());
            FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.flDetailContainer, fragmentItem);
            ft.commit();
        } else { // separate activities
            // launch detail activity using intent
            Intent i = new Intent(this, SongDetailActivity.class);
            i.putExtra("item", item);
            i.putExtra("langKey", fragmentItemsList.getSelectedLangKey());
            startActivity(i);
        }
    }
}

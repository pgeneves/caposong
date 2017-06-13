package com.pgeneves.android.caposong;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.support.v4.app.FragmentTransaction;
import android.support.v4.view.MenuItemCompat;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by phil on 18/12/2016.
 */

public class SongDetailActivity extends AppCompatActivity {
    SongDetailFragment fragmentItemDetail;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_item_detail);
        SongItem item = (SongItem) getIntent().getSerializableExtra("item");
        String langKey = (String) getIntent().getSerializableExtra("langKey");
        if (savedInstanceState == null) {
            fragmentItemDetail = SongDetailFragment.newInstance(item, langKey);
            FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
            ft.replace(R.id.flDetailContainer, fragmentItemDetail);
            ft.commit();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.song_detail, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.back_action:
                onBackPressed();
                return true;
        }
        return false;
    }

    public void onDestroy() {
        super.onDestroy();
    }
}
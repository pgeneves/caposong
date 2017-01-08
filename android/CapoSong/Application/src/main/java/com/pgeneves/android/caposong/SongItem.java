package com.pgeneves.android.caposong;

import java.io.Serializable;

/**
 * Created by phil on 09/12/2016.
 */

public class SongItem implements Serializable {
    private String uid;
    private String name;

    public SongItem(String uid, String title) {
        this.uid = uid;
        this.name = title;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SongItem songItem = (SongItem) o;

        return uid != null ? uid.equals(songItem.uid) : songItem.uid == null;

    }

    @Override
    public int hashCode() {
        return uid != null ? uid.hashCode() : 0;
    }

    @Override
    public String toString() {
        return name;
    }
}

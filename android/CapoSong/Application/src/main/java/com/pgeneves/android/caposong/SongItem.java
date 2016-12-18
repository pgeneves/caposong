package com.pgeneves.android.caposong;

import java.io.Serializable;

/**
 * Created by phil on 09/12/2016.
 */

public class SongItem implements Serializable {
    private int id;
    private String name;

    public SongItem(int id, String title) {
        this.id = id;
        this.name = title;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

        if (id != songItem.id) return false;
        return name != null ? name.equals(songItem.name) : songItem.name == null;

    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        return result;
    }
}

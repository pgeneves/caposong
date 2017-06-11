package com.pgeneves.android.caposong;

import android.os.Environment;

import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class LocalStorageHandler {
    private File internalStorageDir;

    public LocalStorageHandler(File internalStorageDir) {
        this.internalStorageDir = internalStorageDir;
    }

    public String readLocalSongCatalog() {
        if (isExternalStorageReadable()) {
            File file = new File(internalStorageDir, "song_catalog.json");
            if (file.canRead()) {
                FileInputStream fis = null;
                try {
                    fis = new FileInputStream(file);
                    return IOUtils.toString(fis, "utf-8");
                } catch(IOException e) {
                    // No consequences
                    e.printStackTrace();
                } finally {
                    if (fis != null) {
                        try {
                            fis.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                }
            }
        }
        return null;
    }

    public void writeLocalSongCatalog(String songCatalog) {
        if (isExternalStorageWritable()) {
            File file = new File(internalStorageDir, "song_catalog.json");
            FileOutputStream fos = null;
            try {
                fos = new FileOutputStream(file, false);
                IOUtils.write(songCatalog, fos, "utf-8");
                fos.flush();
            } catch(IOException e) {
                // No consequences
                e.printStackTrace();
            } finally {
                if (fos != null) {
                    try {
                        fos.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    /* Checks if external storage is available for read and write */
    private boolean isExternalStorageWritable() {
        String state = Environment.getExternalStorageState();
        if (Environment.MEDIA_MOUNTED.equals(state)) {
            return true;
        }
        return false;
    }

    /* Checks if external storage is available to at least read */
    private boolean isExternalStorageReadable() {
        String state = Environment.getExternalStorageState();
        if (Environment.MEDIA_MOUNTED.equals(state) ||
                Environment.MEDIA_MOUNTED_READ_ONLY.equals(state)) {
            return true;
        }
        return false;
    }
}

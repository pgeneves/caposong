package com.pgeneves.android.caposong;

import android.os.Environment;

import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class LocalStorageHandler {
    private File internalStorageDir;

    public LocalStorageHandler(File internalStorageDir) {
        this.internalStorageDir = internalStorageDir;
    }

    public String readLocalSongContent(String songUid) {
        return readLocalFile("song_"+songUid+".json");
    }

    public void writeLocalSongContent(String songContent, String songUid) {
        writeLocalFile(songContent, "song_"+songUid+".json");
    }

    public void writeLocalSongAudio(InputStream dataStream, String songUid) {
        writeStreamToLocalFile(dataStream, "song_audio_"+songUid+".mp3");
    }

    public boolean isLocalSongAudioAvailable(String songUid) {
        return isExternalStorageReadable() && new File(getSongAudioPath(songUid)).canRead();
    }

    public String readLocalSongCatalog() {
        return readLocalFile("song_catalog.json");
    }

    public void writeLocalSongCatalog(String songCatalog) {
        writeLocalFile(songCatalog, "song_catalog.json");
    }

    private String readLocalFile(String filename) {
        if (isExternalStorageReadable()) {
            File file = new File(internalStorageDir, filename);
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

    private void writeLocalFile(String data, String filename) {
        if (isExternalStorageWritable()) {
            File file = new File(internalStorageDir, filename);
            FileOutputStream fos = null;
            try {
                fos = new FileOutputStream(file, false);
                IOUtils.write(data, fos, "utf-8");
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

    private void writeStreamToLocalFile(InputStream dataStream, String filename) {
        if (isExternalStorageWritable()) {
            File file = new File(internalStorageDir, filename);
            FileOutputStream fos = null;
            try {
                fos = new FileOutputStream(file, false);
                IOUtils.copy(dataStream, fos);
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

    public String getSongAudioPath(String songUid) {
        if (isExternalStorageWritable()) {
            File file = new File(internalStorageDir, "song_audio_"+songUid+".mp3");
            return file.getAbsolutePath();
        }
        throw new IllegalStateException("Local storage is not writable");
    }
}

package com.pgeneves.android.caposong;

import android.content.Context;
import android.os.AsyncTask;

import org.apache.commons.io.IOUtils;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Implementation of AsyncTask, to fetch the data in the background away from
 * the UI thread.
 */
class DownloadFileTask extends AsyncTask<String, Void, Boolean> {
    private LocalStorageHandler localStorageHandler;
    private IAsyncResourceHandler resultHandler;

    public DownloadFileTask(LocalStorageHandler localStorageHandler, IAsyncResourceHandler resultHandler) {
        this.localStorageHandler = localStorageHandler;
        this.resultHandler = resultHandler;
    }

    @Override
    protected Boolean doInBackground(String[] fileData) {
        return loadFileFromNetwork(fileData[0], fileData[1]);
    }

    /**
     * Uses the logging framework to display the output of the fetch
     * operation in the log fragment.
     */
    @Override
    protected void onPostExecute(Boolean result) {
        resultHandler.handleAsyncResult(result.toString());
    }

    private boolean loadFileFromNetwork(String urlString, String songUid) {
        InputStream stream = null;
        try {
            stream = downloadUrl(urlString);
            localStorageHandler.writeLocalSongAudio(stream, songUid);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        } finally {
            if (stream != null) {
                try {
                    stream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return true;
    }

    /**
     * Given a string representation of a URL, sets up a connection and gets
     * an input stream.
     * @param urlString A string representation of a URL.
     * @return An InputStream retrieved from a successful HttpURLConnection.
     * @throws IOException
     */
    private InputStream downloadUrl(String urlString) throws IOException {
        // BEGIN_INCLUDE(get_inputstream)
        URL url = new URL(urlString);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setReadTimeout(10000 /* milliseconds */);
        conn.setConnectTimeout(15000 /* milliseconds */);
        conn.setRequestMethod("GET");
        conn.setDoInput(true);
        // Start the query
        conn.connect();
        InputStream stream = conn.getInputStream();
        return stream;
        // END_INCLUDE(get_inputstream)
    }
}

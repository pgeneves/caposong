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
class DownloadTask extends AsyncTask<String, Void, String> {

    private IAsyncResourceHandler resultHandler;

    public DownloadTask(IAsyncResourceHandler resultHandler) {
        this.resultHandler = resultHandler;
    }

    @Override
    protected String doInBackground(String... urls) {
        try {
            return loadStringFromNetwork(urls[0]);
        } catch (IOException e) {
            return e.getMessage();
        }
    }

    /**
     * Uses the logging framework to display the output of the fetch
     * operation in the log fragment.
     */
    @Override
    protected void onPostExecute(String result) {
        resultHandler.handleAsyncResult(result);
    }

    private String loadStringFromNetwork(String urlString) throws IOException {
        InputStream stream = null;
        String str ="";
        try {
            stream = downloadUrl(urlString);
            str = readIt(stream, 500);
        } finally {
            if (stream != null) {
                stream.close();
            }
        }
        return str;
    }

    private boolean loadFileFromNetwork(Context context, String urlString, String savePath) throws IOException {
        InputStream stream = null;
        try {
            stream = downloadUrl(urlString);
            try {
                FileOutputStream outputStream=null;
                try {
                    outputStream = context.openFileOutput(savePath, Context.MODE_PRIVATE);
                    IOUtils.copy(stream, outputStream);
                } catch (IOException ex) {
                    ex.printStackTrace();
                    return false;
                } finally {
                    if (outputStream != null) {
                        outputStream.close();
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
                return false;
            }
        } finally {
            if (stream != null) {
                stream.close();
            }
        }
        return true;
    }

    /**
     * Given a string representation of a URL, sets up a connection and gets
     * an input stream.
     * @param urlString A string representation of a URL.
     * @return An InputStream retrieved from a successful HttpURLConnection.
     * @throws java.io.IOException
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

    /** Reads an InputStream and converts it to a String.
     * @param stream InputStream containing HTML from targeted site.
     * @param len Length of string that this method returns.
     * @return String concatenated according to len parameter.
     * @throws java.io.IOException
     * @throws java.io.UnsupportedEncodingException
     */
    private String readIt(InputStream stream, int len) throws IOException, UnsupportedEncodingException {
        StringBuilder response = new StringBuilder();
        BufferedReader in = new BufferedReader(new InputStreamReader(stream, "UTF-8"));
        try {
            String line;
            while ((line = in.readLine()) != null) {
                response.append(line);
            }
        } finally {
            in.close();
        }
        return response.toString();
    }

}

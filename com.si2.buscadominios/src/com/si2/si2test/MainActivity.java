package com.si2.si2test;

import android.os.Bundle;
//import android.app.Activity;
import android.view.Menu;
import 	android.net.ConnectivityManager;	
import android.net.NetworkInfo;
import android.content.Context;
import android.widget.Toast;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.view.MenuItem;


import org.apache.cordova.*;

import com.si2.buscadominios.R;

public class MainActivity extends DroidGap {

	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (!verificaConexion(this)) {
            Toast.makeText(getBaseContext(),
                    "Comprueba tu conexión a Internet. Saliendo ... ", Toast.LENGTH_SHORT)
                    .show();
            this.finish();
        }
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl("file:///android_asset/www/index.html",2000);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
    // TODO Auto-generated method stub
    menu.add(0, 0, 0, R.string.app_about);
    menu.add(0, 1, 1, R.string.str_exit);
    return super.onCreateOptionsMenu(menu);
    }
    

    public static boolean verificaConexion(Context ctx) {
        boolean bConectado = false;
        ConnectivityManager connec = (ConnectivityManager) ctx
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        // No sólo wifi, también GPRS
        NetworkInfo[] redes = connec.getAllNetworkInfo();
        // este bucle debería no ser tan ñapa
        for (int i = 0; i < 2; i++) {
            // ¿Tenemos conexión? ponemos a true
            if (redes[i].getState() == NetworkInfo.State.CONNECTED) {
                bConectado = true;
            }
        }
        return bConectado;
    }
    

    
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
    // TODO Auto-generated method stub
    super.onOptionsItemSelected(item);

    switch(item.getItemId())
    {
    case 0:
    openOptionsDialog();
    break;
    case 1:
    exitOptionsDialog();
    break;
    }
    return true;
    }
    
    private void openOptionsDialog()
    {
    new AlertDialog.Builder(this)
    .setTitle(R.string.app_about)
    .setMessage(R.string.app_about_message)
    .setPositiveButton(R.string.str_ok,
    new DialogInterface.OnClickListener()
    {
    public void onClick(DialogInterface dialoginterface, int i)
    {
    }
    })
    .show();
    }
    
    private void exitOptionsDialog()
    {
    new AlertDialog.Builder(this)
    .setTitle(R.string.app_exit)
    .setMessage(R.string.app_exit_message)
    .setNegativeButton(R.string.str_no,
    new DialogInterface.OnClickListener()
    {
    public void onClick(DialogInterface dialoginterface, int i)
    {}
    })
    .setPositiveButton(R.string.str_ok,
    new DialogInterface.OnClickListener()
    {
    public void onClick(DialogInterface dialoginterface, int i)
    {
     finish();
    }
    })
    .show();
    }
    
}


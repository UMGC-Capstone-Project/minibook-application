Windows 
- Powershell
```
$Env:NODE_OPTIONS=--openssl-legacy-provider
```
- CMD
```
set NODE_OPTIONS=--openssl-legacy-provider
```
Linux
```
export NODE_OPTIONS=--openssl-legacy-provider
```
lite-server

ng build --configuration production

ionic capacitor build android
ionic capacitor sync android


SET CAPACITOR_ANDROID_STUDIO_PATH=C:\Users\coldf\AppData\Local\JetBrains\Toolbox\apps\AndroidStudio\ch-0\203.7784292\bin


  @RequiresApi(api = Build.VERSION_CODES.Q)
  @Override
  public void onResume() {
    super.onResume();
    int nightModeFlags = getResources().getConfiguration().uiMode & Configuration.UI_MODE_NIGHT_MASK;
    WebSettings webSettings = this.bridge.getWebView().getSettings();

    if (nightModeFlags == Configuration.UI_MODE_NIGHT_YES) {
      if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
        webSettings.setForceDark(WebSettings.FORCE_DARK_ON);
      }
    } else {
      webSettings.setForceDark(WebSettings.FORCE_DARK_OFF);
    }
  }

  ionic serve --configuration=development
  ionic serve --configuration=production
---
title: Chromebook Wifi settings
description: How to connect a chromebook to the detnsw wifi
---
For some strange reason, as of Feb 2024 detnsw wifi settings automagically configure windows devices, but chromebooks require entering in a bunch of settings. So here goes: 
## Connect to Wifi

Connect to the detnsw wifi by clicking the bottom right (where the time is displayed) and click the wifi icon. This should display the **detnsw** wifi - select that and enter the following options:

| Setting | Value |
| ---- | ---- |
| EAP method | `Peap` |
| Phase-2 authentication | `MSCHAPV2` |
| CA certificate | Do not Check |
| User certificate | leave blank |
| Identity | `firstname.lastnameX@detnsw` |
| Anonymous Identity | leave blank |
| Password | Enter your DoE Account Password |
### Proxy settings  
detnsw uses a proxy which seems to be optional - the internet does work with or without setting the proxy, so add this setting if having issues. 

After the Wi-Fi network has been successfully joined:
  
1. Click the Wi-Fi icon -  the detnsw Wi-Fi should say `Connected`.  
2. Click the Gear icon at the top-right on the Network window and select the `detnsw` network. 
3. In the proxy section, choose `Web proxy auto-discovery`.  
  
The proxy should be up and running now, only enter the settings manually ff the above doesn't do the job:  
  
* Tick Show advanced options. Ensure proxy settings are set to Manual  
* Proxy hostname: `proxy.det.nsw.edu.au`  
* Proxy port: `8080`  
  
### Internet access  

:::tip
This should come up about once a day.
:::

Every 8 hours you need to renew your login credentials to connect to the internet. When you open a web browser, it should automatically take you to a login portal.  Login with your detnsw credentials.
  
If not auto-directed to the wifi login, goto: [http://detnsw.net](http://detnsw.net/) where you should see the login page.  
  
## Troubleshooting  

Connect the chrombeook to a home wifi network before taking it to school, and let it update and restart. 

* make sure the time is set correctly and in your timezone - this should be automatic once connected to internet.
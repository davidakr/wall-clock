#ifndef WifiConnection_h
#define WifiConnection_h

#include "WiFiManager.h"
#include "Arduino.h"
#include "ArduinoJson.h"
#include "GlobalProperties.h"
#include "ESP_EEPROM.h"
#include "ESP8266WebServer.h"
#include "ESP8266WiFi.h"

class WifiConnection {
  public:
    WifiConnection();
    void beginWifi();
    void Start();
    void handleWifi();
    void setLED();
    bool WifiIsConnected();
    void setupServer();
    void handleServer();
  private:
    int pinWifiLed = 16;
    WiFiManager wifiManager;
    ESP8266WebServer server;
    WiFiClient client;
    String prepareResponse();
    void handleRoot();
};

#endif

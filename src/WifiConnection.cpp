#include "WifiConnection.h"

WifiConnection::WifiConnection(): server(80) {
  pinMode(pinWifiLed, OUTPUT);
}

void WifiConnection::Start() {
  WiFi.mode(WIFI_STA);
  wifiManager.setConfigPortalBlocking(false);
  wifiManager.setConfigPortalTimeout(240);
  //wifiManager.setBreakAfterConfig(true);
  if (wifiManager.autoConnect("LedClock")) {
    Serial.println("Connected via autoConnect");
  }
  else {
    Serial.println("Failed to connect or hit timeout");
    ESP.restart();
  }
}

void WifiConnection::handleRoot() {
  bool boolCommit = false;
  if (server.hasArg("RED_RGB")) {
    RED_RGB = byte(server.arg("RED_RGB").toInt());
    EEPROM.put(addr_red, RED_RGB);
    boolCommit = true;
  }
  if (server.hasArg("GREEN_RGB")) {
    GREEN_RGB = byte(server.arg("GREEN_RGB").toInt());
    EEPROM.put(addr_green, GREEN_RGB);
    boolCommit = true;
  }
  if (server.hasArg("BLUE_RGB")) {
    BLUE_RGB = byte(server.arg("BLUE_RGB").toInt());
    EEPROM.put(addr_blue, BLUE_RGB);
    boolCommit = true;
  }
  if (server.hasArg("STATE_STATUS")) {
    STATE_STATUS = byte(server.arg("STATE_STATUS").toInt());
    EEPROM.put(addr_state_status, STATE_STATUS);
    boolCommit = true;
  }
  if (server.hasArg("TIMEZONE")) {
    TIMEZONE = byte(server.arg("TIMEZONE").toInt());
    EEPROM.put(addr_timezone, TIMEZONE);
    boolCommit = true;
  }
  if (server.hasArg("BRIGHTNESS_STATUS")) {
    BRIGHTNESS_STATUS = byte(server.arg("BRIGHTNESS_STATUS").toInt());
    EEPROM.put(addr_brightness_status, BRIGHTNESS_STATUS);
    boolCommit = true;
  }
  if (server.hasArg("BRIGHTNESS_VALUE")) {
    BRIGHTNESS_VALUE = byte(server.arg("BRIGHTNESS_VALUE").toInt());
    EEPROM.put(addr_brightness, BRIGHTNESS_VALUE);
    boolCommit = true;
  }
  if (server.hasArg("BRIGHTNESS_MULTIPLIER")) {
    BRIGHTNESS_MULTIPLIER = byte(server.arg("BRIGHTNESS_MULTIPLIER").toInt());
    EEPROM.put(addr_brightness_multiplier, BRIGHTNESS_MULTIPLIER);
    boolCommit = true;
  }
  if (server.hasArg("FADE_STATUS")) {
    FADE_STATUS = byte(server.arg("FADE_STATUS").toInt());
    EEPROM.put(addr_fade_status, FADE_STATUS);
    boolCommit = true;
  }
  if (server.hasArg("FADE_VALUE")) {
    FADE_VALUE = byte(server.arg("FADE_VALUE").toInt());
    EEPROM.put(addr_fade_value, FADE_VALUE);
    boolCommit = true;
  }
  if (server.hasArg("PARTY_STATUS")) {
    PARTY_STATUS = byte(server.arg("PARTY_STATUS").toInt());
    EEPROM.put(addr_party_status, PARTY_STATUS);
    boolCommit = true;
  }
  if (server.hasArg("PARTY_VALUE")) {
    PARTY_VALUE = byte(server.arg("PARTY_VALUE").toInt());
    EEPROM.put(addr_party_value, PARTY_VALUE);
    boolCommit = true;
  }
  if (boolCommit == true) {
    EEPROM.commit();
  }
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Connection", "Close");
  server.send(200, "application/json", prepareResponse());
}

bool WifiConnection::WifiIsConnected() {
  return WiFi.status() == WL_CONNECTED;
}

void WifiConnection::setupServer() {
  server.on("/", std::bind(&WifiConnection::handleRoot, this));
  server.begin();
  Serial.println("Server started");
  Serial.println("Local IP address: ");
  Serial.println(WiFi.localIP());
  return;
}

void WifiConnection::handleWifi() {
  setLED();
  wifiManager.process();
}
void WifiConnection::handleServer() {
  server.handleClient();
}

String WifiConnection::prepareResponse() {
  StaticJsonDocument<1000> root;

  root["NAME"] = "WallClock";
  root["STATE_STATUS"] = STATE_STATUS;
  root["RED_RGB"] = RED_RGB;
  root["GREEN_RGB"] = GREEN_RGB;
  root["BLUE_RGB"] = BLUE_RGB;
  root["BRIGHTNESS_STATUS"] = BRIGHTNESS_STATUS;
  root["BRIGHTNESS_VALUE"] = BRIGHTNESS_VALUE;
  root["TIMEZONE"] = TIMEZONE;
  root["TEMPERATURE"] = TEMPERATURE;
  root["FADE_STATUS"] = FADE_STATUS;
  root["FADE_VALUE"] = FADE_VALUE;
  root["PARTY_STATUS"] = PARTY_STATUS;
  root["PARTY_VALUE"] = PARTY_VALUE;
  char buffer[1000];
  serializeJson(root, buffer);
  return String(buffer);
}
void WifiConnection::setLED() {
  if (WiFi.status() == WL_CONNECTED) {
    digitalWrite(pinWifiLed, HIGH);
  } else {
    digitalWrite(pinWifiLed, LOW);
  }
}

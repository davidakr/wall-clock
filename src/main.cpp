//---------------------------------------------------------------------
// WallClock accesible local IP
//---------------------------------------------------------------------
#include "time.h"
#include "sys/time.h"
#include "Led.h"
#include "GlobalProperties.h"
#include "PhotocellSensor.h"
#include "WifiConnection.h"
#include "ESP_EEPROM.h"
#include "coredecls.h"
#include "ESP8266WiFi.h"
#include "NeoPixelBrightnessBus.h"


const uint16_t PixelCount = 130;
const uint8_t PixelPin = 0;

typedef NeoPixelBrightnessBus<NeoRgbFeature, Neo800KbpsMethod> NeoPixelBusType;
NeoPixelBusType stripe(PixelCount, PixelPin);

Led led(stripe);
WifiConnection wifiConnection;
PhotocellSensor photocellSensor;

//global variables
byte STATE_STATUS;
byte BRIGHTNESS_STATUS;
byte BRIGHTNESS_VALUE;
byte BRIGHTNESS_MULTIPLIER;
byte RED_RGB;
byte GREEN_RGB;
byte BLUE_RGB;
byte TEMPERATURE;
byte FADE_STATUS;
byte FADE_VALUE;
byte PARTY_STATUS;
byte PARTY_VALUE;
byte TIMEZONE;

//address space for EEPROM
int addr_red = 0;
int addr_green = 2;
int addr_blue = 4;
int addr_state_status = 6;
int addr_brightness_status = 8;
int addr_brightness = 10;
int addr_brightness_multiplier = 12;
int addr_timezone = 14;
int addr_fade_status = 16;
int addr_fade_value = 18;
int addr_party_status = 20;
int addr_party_value = 22;

//update time
int updateHours = 4;
int updateMinutes = 0;
int updateSeconds = 0;

//timer variables
unsigned long previousMillis = 0;
const long intervalLED = 250;
unsigned long timestamp = 0;

const char *TZstr = "CET-1CEST,M3.5.0,M10.5.0/3";

timeval cbtime;      // when time set callback was called
bool cbtime_set = false;

timeval tv;
struct timezone tz;
time_t tnow;
bool firstTimeConnected = true;

void time_is_set (void)
{
  time_t t = time (nullptr);

  gettimeofday (&cbtime, NULL);
  cbtime_set = true;
  Serial.println
  ("------------------ settimeofday() was called ------------------");
  printf (" local asctime: %s\n",
          asctime (localtime (&t))); // print formated local time

  // set RTC using t if desired
}

void setup() {
  stripe.Begin();
  stripe.Show();
  Serial.begin(115200);
  Serial.println("WallClock");
  led.Setup();
  wifiConnection.Start();
}

void loop() {
  if (wifiConnection.WifiIsConnected() && firstTimeConnected) {
    wifiConnection.setupServer();
    EEPROM.begin(512);

    // get initial values from EEPROM
    EEPROM.get(addr_state_status, STATE_STATUS);
    EEPROM.get(addr_brightness_status, BRIGHTNESS_STATUS);
    EEPROM.get(addr_brightness, BRIGHTNESS_VALUE);
    EEPROM.get(addr_brightness_multiplier, BRIGHTNESS_MULTIPLIER);
    EEPROM.get(addr_red, RED_RGB);
    EEPROM.get(addr_green, GREEN_RGB);
    EEPROM.get(addr_blue, BLUE_RGB);
    EEPROM.get(addr_fade_status, FADE_STATUS);
    EEPROM.get(addr_fade_value, FADE_VALUE);
    EEPROM.get(addr_party_status, PARTY_STATUS);
    EEPROM.get(addr_party_value, PARTY_VALUE);
    //TIMEZONE = EEPROM.get(addr_timezone);
    TIMEZONE = 1;

    //time setup
    settimeofday_cb (time_is_set);
    configTime (TZstr, "pool.ntp.org");
    firstTimeConnected = false;
  }

  wifiConnection.handleWifi();
  if (!cbtime_set)  // don't do anything until NTP has set time
    return;

  wifiConnection.handleServer();
  gettimeofday (&tv, &tz);
  tnow = time (nullptr);
  tm* tm = localtime (&tnow);

  yield();

  if (!BRIGHTNESS_STATUS) {
    int newValue = photocellSensor.readPhotocell();
    int diffValue = abs(newValue - BRIGHTNESS_VALUE);
    if (diffValue > 2) {
      BRIGHTNESS_VALUE = newValue;
    }
  }
  yield();
  led.setLedTime(tm->tm_hour, tm->tm_min, tm->tm_sec);
  yield();
}

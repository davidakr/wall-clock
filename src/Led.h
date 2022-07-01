#ifndef Led_h
#define Led_h

//#define FASTLED_ESP8266_NODEMCU_PIN_ORDER
//#include "Adafruit_NeoPixel.h"
#include "NeoPixelBrightnessBus.h"
#include "GlobalProperties.h"

#define LED_PIN               0
#define NUM_LEDS              130

typedef NeoPixelBrightnessBus<NeoRgbFeature, Neo800KbpsMethod> NeoPixelBusType;

class Led {
  public:
    Led(NeoPixelBusType& pixelStrip): pixels(pixelStrip) {}
    void Setup();
    void setLedTime(int seconds, int minutes, int hours);

  private:
    NeoPixelBusType& pixels;
    void setLedPixel(int arrayInt[], int arraySize, int toAdd);
    void setAllLedPixel(byte red, byte greem, byte blue);

    unsigned long previousMillis = 0;
    byte PARTY_BUFFER[NUM_LEDS][3];
    byte FADE_BUFFER[3] = {255, 0, 0};

    //Numbers for Led Display
    int all[21] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
    int zero [18] = {3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 , 20};
    int one[6] = {9, 10, 11, 12, 13, 14};
    int two[15] = {0, 1, 2, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20};
    int three[15] = {0, 1, 2, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17};
    int four[12] = {0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14};
    int five[15] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17};
    int six[18] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 18, 19, 20};
    int seven[9] = {6, 7, 8, 9, 10, 11, 12, 13, 14};
    int eight[21] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};
    int nine[18] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17};
    int dot[2] = {0, 1};
};

#endif

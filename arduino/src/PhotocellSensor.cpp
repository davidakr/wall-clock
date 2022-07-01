#include "PhotocellSensor.h"

int PhotocellSensor::readPhotocell() {
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    int sum = 0;
    int sizeArray = sizeof(avgPhoto) / sizeof(int);
    for (int i = sizeArray - 1; i > 0; i--) {
      avgPhoto[i]  = avgPhoto[i - 1];
    }

    int readValue = analogRead(photocellPin);
    int outputValue = map(readValue, 0, 1023, 0, 255);
    int calculatedValue = 0.0039*(outputValue*outputValue);

    avgPhoto[0] = outputValue;
    for (int i = 0; i < sizeArray; i++) {
      sum += avgPhoto[i];
    }
    currentValue = sum / sizeArray;
  }

  return currentValue;
}

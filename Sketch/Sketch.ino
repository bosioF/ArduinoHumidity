#include <DHT.h>

#define DHTPIN 7
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();        
}

void loop() {
  float temperatura = dht.readTemperature();
  float umidita = dht.readHumidity();

  if (!isnan(temperatura) && !isnan(umidita)) {
    Serial.print("{\"temperatura\":");
    Serial.print(temperatura);
    Serial.print(", \"umidita\":");
    Serial.print(umidita);
    Serial.println("}");
  }

  delay(2000);
}

# Aufgaben

| Aufgabe                                                                                             | Lösung                                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Recherchiere die benötigten Befehle um Daten ein- und auszulesen                                    | `#addEventListener` in TS                                                                                                                                                                                                                           |
| Definiere, was man unter Konzentration versteht                                                     | Konzentration ist die geistige Aufmerksamkeit auf einen Punkt richten                                                                                                                                                                               |
| Erkläre den Weg im menschlichen Körper "vom Reiz zur Reaktion"                                      | Reiz -> Sinnesorgan -> Nervensystem -> Gehirn -> Reaktion                                                                                                                                                                                           |
| Erstelle ein sogennantes Reiz-Reaktions-Schema                                                      | **/\\**                                                                                                                                                                                                                                             |
| Recherchiere verschiedene Testverfahren um die Konzentration und die Reaktionsfähigkeit zu testen   | Konzentration: **d2-R Test** <br> Reaktionsfähigkeit: **Finger-Tapping-Test**                                                                                                                                                                       |
| Sammle Informationen, wie die Testverfahren funktionieren und welche Aufgaben(-typen) zu lösen sind | Konzentration: **Beim d2-R-Test geht es darum, unter Zeitdruck bestimmte Zeichen in einer Reihe zu finden und zu markieren** <br> Reaktionsfähigkeit: **Beim Finger-Tapping-Test geht es darum, so schnell wie möglich auf einen Knopf zu drücken** |

# Kurze Wiederholung

```cpp
#include <Arduino.h>

#define LED 13

void setup()
{
      Serial.begin(115200);
      randomSeed(analogRead(0));

      int numberToGuess = random(1, 7);
      Serial.println("Number to guess: " + String(numberToGuess));

      digitalWrite(LED, numberToGuess == 6 ? HIGH : LOW);
}
```

## Aufgabe 1.1

Beschreibe in eigenen Worten, was das Programm macht.

**Lösung**: Das Programm generiert eine Zufallszahl zwischen 1 und 6 und gibt diese auf der seriellen Schnittstelle aus. Wenn die Zufallszahl 6 ist, wird die LED auf Pin 13 eingeschaltet. Die LED ist jedoch nicht initialisiert, weswegen kein Geschehen äusserlich sichtbar ist

## Aufgabe 1.2

Ergänze das Programm so, dass bei `numberToGuess == 1` eine rote LED aufleuchtet und auf dem Serial monitor `Buuh!` ausgegeben wird.

**Lösung**:

```cpp
#include <Arduino.h>

#define LED_GREEN 13
#define RED_LED 14

void setup()
{
  Serial.begin(115200);
  randomSeed(analogRead(0));

  int numberToGuess = random(1, 7);
  Serial.println("Number to guess: " + String(numberToGuess));

  digitalWrite(LED_GREEN, numberToGuess == 6 ? HIGH : LOW);

  if (numberToGuess == 1)
  {
    digitalWrite(RED_LED, HIGH);
    Serial.println("Buuh!");
  }
}
```

# Analoger Eingang

## Aufgabe 2.1

- Binomialkoeffizienten
- Kumulierte wahrscheinlichkeit
- Bedingte wahrscheinlichkeit
- Stochastische (un-)abhänigkeit
- Bernoulli-Kette
- Galton Board
- Standardabweichung (sigma)
- Erwartungswert (binomialverteilung / müh)
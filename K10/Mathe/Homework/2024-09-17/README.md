# Aufgabe 1

## Aufgabenstellung

In einem Forschungsinstitut arbeiten 20 Professoren und 25 Studenten. Beim morgendlichen Meeting trinken 70% der Professoren und 72% der Studenten Kaffee. Erstelle eine Vierfeldertafel und bestimme die Wahrscheinlichkeit, dass eine zufällig ausgewählte Person beim morgendlichen Meeting

1. ein Student ist,
1. Student ist, wenn er Kaffee trinkt,
1. Kaffee trinkt,
1. Kaffee trinkt, wenn er Student ist.

## Lösung

Vierfeldertafel:

- **A** => Student
- **B** => Kaffee trinken

|        | A   | !A  |     |
| ------ | --- | --- | --- |
| **B**  | 18  | 14  | 32  |
| **!B** | 7   | 6   | 13  |
|        | 25  | 20  | 45  |

1. Wahrscheinlichkeit, dass eine zufällig ausgewählte Person beim morgendlichen Meeting ein Student ist: $$P(A) = \frac{25}{45} \approx 55.56\%$$
1. Wahrscheinlichkeit, dass eine zufällig ausgewählte Person ein Student ist, wenn er Kaffee trinkt: $$P_B(A) = \frac{P(A \cap B)}{P(B)} = \frac{18}{32} = \frac{9}{16} \approx 56.25\%$$
3. Wahrscheinlichkeit, dass eine zufällig ausgewählte Person Kaffee trinkt: $$P(B) = \frac{32}{45} \approx 71.11\%$$
4. Wahrscheinlichkeit, dass eine zufällig ausgewählte Person Kaffee trinkt, wenn er Student ist: $$P_A(B) = \frac{P(A \cap B)}{P(A)} = \frac{18}{25} = \frac{18}{25} = 72\%$$

# Aufgabe 2

## Aufgabenstellung

Von den 800 Schüler\*innen eines Gymnasiums gehen 280 in die Mittelstufe. Davon besuchen 42 eine AG. Von den anderen Schülern besuchen 118 eine AG. Erstelle eine Vierfeldertafel und untersuche, ob die Ereignisse "geht in die Mittelstufe" und "besucht eine AG" stochastisch unabhängig sind.

## Lösung

Vierfeldertafel:

- **A** => Mittelstufe
- **B** => AG

|        | A   | !A  |     |
| ------ | --- | --- | --- |
| **B**  | 42  | 118 | 160 |
| **!B** | 238 | 402 | 640 |
|        | 280 | 520 | 800 |

Probe auf stochastische Unabhängigkeit:

$$P(A \cap B) = \frac{42}{800} = 0.0525$$
$$P(A) \cdot P(B) = \frac{280}{800} \cdot \frac{160}{800} = 0.056$$

Da $$P(A \cap B) \neq P(A) \cdot P(B)$$ sind die Ereignisse "geht in die Mittelstufe" und "besucht eine AG" nicht stochastisch unabhängig.
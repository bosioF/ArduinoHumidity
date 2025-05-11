# 🌡️ Misuratore di Temperatura e Umidità con Arduino

Benvenuto nel progetto **Misuratore di Temperatura e Umidità**! Questo sistema utilizza un sensore **DHT11**, un **Arduino** e un'applicazione web per monitorare in tempo reale i dati di temperatura e umidità ambientale. 🖥️

![Progetto Arduino](https://via.placeholder.com/800x400) <!-- Sostituisci con uno screenshot o immagine del progetto -->

## 🚀 Funzionalità

- 📊 **Monitoraggio in tempo reale**: Visualizza temperatura e umidità aggiornate ogni secondo.
- 🌍 **Interfaccia Web**: Dati visualizzati in modo intuitivo tramite una dashboard su localhost.
- 🔗 **Connessione seriale**: Comunicazione diretta tra Arduino e il server Node.js.

---

## 🛠️ Requisiti

### Hardware
- 🧰 **Arduino Uno** (o equivalente)
- 🌡️ **Sensore DHT11**
- 🔌 **Cavi di collegamento**
- 🖥️ **Computer con connessione USB**

### Software
- 🛠️ **Arduino IDE** per upload del codice su Arduino
- 📦 **Node.js** v16+ per il server
- 🔗 Libreria `serialport` per la comunicazione seriale

---

## 📋 Installazione

### 1. Configurare Arduino
1. Collega il sensore **DHT11** ad Arduino:
   - **Pin 5V** → VCC
   - **Pin GND** → GND
   - **Pin digitale** → D2 (configurabile nel codice)
2. Carica lo sketch fornito (`Sketch.ino`) utilizzando l'IDE Arduino.

### 2. Configurare il Server
1. Clona questo repository:
   ```bash
   git clone https://github.com/tuo-username/misuratore-temperatura
   cd misuratore-temperatura

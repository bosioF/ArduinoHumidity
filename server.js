const express = require("express");
const { SerialPort, ReadlineParser } = require("serialport");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

const serialPort = new SerialPort({ path: "COM3", baudRate: 9600 });
const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\r\n" }));

let data = {
  temperatura: 0,
  umidita: 0
};

parser.on("data", (line) => {
  console.log("Dati ricevuti dalla porta seriale:", line);
  try {
    const parsedData = JSON.parse(line);  // Parsing dei dati JSON
    if (parsedData.temperatura && parsedData.umidita) { // Verifica se i dati sono validi
      data.temperatura = parsedData.temperatura;  // Aggiorna la temperatura
      data.umidita = parsedData.umidita;  // Aggiorna l'umidità
      console.log('Dati salvati:', data);  // Verifica i dati salvati
    }
  } catch (err) {
    console.error('Errore nel parsing dei dati:', err);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Assicurati che index.html sia nella stessa cartella di server.js
});

app.get("/api/dati", (req, res) => {
  console.log("Dati inviati:", data);  // Log per assicurarti che `data` venga restituito correttamente
  res.json(data);  // Restituisce i dati come JSON
});


app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});

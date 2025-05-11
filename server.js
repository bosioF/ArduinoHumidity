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
    const parsedData = JSON.parse(line); 
    if (parsedData.temperatura && parsedData.umidita) { 
      data.temperatura = parsedData.temperatura;  
      data.umidita = parsedData.umidita;  
      console.log('Dati salvati:', data);  
    }
  } catch (err) {
    console.error('Errore nel parsing dei dati:', err);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); 
});

app.get("/api/dati", (req, res) => {
  console.log("Dati inviati:", data);  
  res.json(data);  
});


app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});

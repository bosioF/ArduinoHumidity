async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/dati");
    const data = await response.json();

    document.getElementById("temperatura").textContent = `${data.temperatura} °C`;
    document.getElementById("umidita").textContent = `${data.umidita} %`;
  } catch (err) {
    console.error("Errore durante il fetch dei dati:", err);
  }
}

setInterval(fetchData, 2000);

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

function gerarNumerosDaSorte(qtd = 6, min = 1, max = 60) {
  const numeros = new Set();
  while (numeros.size < qtd) {
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.add(n);
  }
  return Array.from(numeros).sort((a, b) => a - b);
}

app.get("/numeros-da-sorte", (req, res) => {
  const numeros = gerarNumerosDaSorte();
  res.json({ message: numeros });
});

app.get("/", (req, res) => {
  res.send("Use /numeros-da-sorte para obter seus números da sorte!");
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});

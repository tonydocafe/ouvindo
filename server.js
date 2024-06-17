const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); 
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.post("/salvar", (req, res) => {
  const palavra = req.body.palavra;

  // Salvar a palavra em um arquivo .txt
  fs.appendFile("registro_palavras.txt", palavra + "\n", (err) => {
    if (err) {
      console.error("Erro ao salvar palavra:", err);
      res.status(500).json({ error: "Erro ao salvar palavra" });
    } else {
      console.log("Palavra salva com sucesso:", palavra);
      res.json({ success: true });
    }
  });
});
 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
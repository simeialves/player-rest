const express = require("express");
const bodyParser = require("body-parser");
const songController = require("./controllers/SongController");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use("/", songController);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

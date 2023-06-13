const express = require("express");
const Song = require("../models/song");
const router = express.Router();

const musica_01 = new Song(
  1,
  "Back_In_Black.mp3",
  "AC/DC",
  "https://simeialves.com.br/songs/Back_In_Black.mp3"
);

const musica_02 = new Song(
  2,
  "Eu_Sei_de_Cor.mp3",
  "Marília Mendonça",
  "https://simeialves.com.br/songs/Eu_Sei_de_Cor.mp3"
);

const musica_03 = new Song(
  3,
  "In_da_club.mp3",
  "50 Cent",
  "https://simeialves.com.br/songs/In_da_club.mp3"
);

const musica_04 = new Song(
  4,
  "Mundo_Animal.mp3",
  "Mamonas Assassinas",
  "https://simeialves.com.br/songs/Mundo_Animal.mp3"
);

const musicas = [musica_01, musica_02, musica_03, musica_04];

router.get("/", (req, res) => {
  return res.status(200).json({
    "Integrante 01": "Leandro Simeão",
    "Integrante 02": "Mateus Maia",
    "Integrante 03": "Seara Saback",
    "Integrante 04": "Simei Alves",
  });
});

router.get("/songs/", (req, res) => {
  return res.status(200).json(musicas);
});

router.get("/songs/:id", (req, res) => {
  const id = req.params.id;
  const musica = musicas.find((musica) => musica.id == id);
  if (!musica) {
    return res.status(404).json({ message: "Música não encontrada" });
  }
  return res.status(200).json(musica);
});

module.exports = router;

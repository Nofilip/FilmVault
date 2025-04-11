import express from "express";
import sqlite3 from "better-sqlite3";

const port = 8000;

const app = express();

const db = sqlite3('./db/films.db');

app.get("/api/films", (req, res) => {
  try {
    // Hämta filmer från databasen (ersätt med din egen SQL-fråga)
    const films = db.prepare('SELECT * FROM films').all();
    
    res.json(films); // Skicka tillbaka filmerna som JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Det uppstod ett problem vid hämtning av filmer.');
  }
});

app.listen(port, () => {
  console.log(`Lyssnar på port ${port}`);
});
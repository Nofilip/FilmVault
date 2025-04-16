import express from "express";
import sqlite3 from "better-sqlite3";

const port = 8000;

const app = express();

const db = sqlite3('./db/films.db');

app.get("/api/films", (req, res) => {
  try {
    
    const films = db.prepare('SELECT * FROM films').all();
    
    res.json(films); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Det uppstod ett problem vid hämtning av filmer.');
  }
});

app.listen(port, () => {
  console.log(`Lyssnar på port ${port}`);
});

app.get("/api/films/:slug", (req, res) => {
  const slug = req.params.slug;

  try {
    const film = db.prepare("SELECT * FROM films WHERE slug = ?").get(slug);

    if (film) {
      res.json(film);
    } else {
      res.status(404).json({ message: "Film not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Något gick fel när vi hämtade filmen.");
  }
});

app.get('/api/films/genre/:genre/:id', (req, res) => {
  const genre = req.params.genre;
  const id = req.params.id;
  
  try {
    const films = db.prepare("SELECT * FROM films WHERE genre = ? AND id != ? LIMIT 3").all(genre, id);

    if (films.length > 0) {
      res.json(films);  // Skickar tillbaka filmer av samma genre
    } else {
      res.status(404).json({ message: "Inga filmer hittades för den här genren." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Något gick fel när vi hämtade filmerna.");
  }
});
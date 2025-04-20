import express from "express";
import sqlite3 from "better-sqlite3";

const port = 8000;

const app = express();

const db = sqlite3('./db/films.db');

app.use(express.json());


app.post('/api/films', (req, res) => {
  const { title, description, imageUrl, genre, director, eidr, price, slug } = req.body;

  const generatedSlug = slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  try {
    const stmt = db.prepare(`
      INSERT INTO films (title, genre, description, director, imageUrl, price, slug, eidr)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
  
    stmt.run(title, genre, description, director, imageUrl, price, generatedSlug, eidr);
  
    const newFilm = {
      title,
      genre,
      description,
      director,
      imageUrl,
      price,
      slug: generatedSlug,
      eidr
    };
  
    res.status(201).json(newFilm);
  } catch (error) {
    console.error('Database insert error:', error);
    res.status(500).json({ error: "Något gick fel när filmen skulle sparas." });
  }
});

app.get('/api/films/search', (req, res) => {
  const query = req.query.query?.toString().toLowerCase();
  console.log('Received query:', query); // Logga den mottagna queryn

  if (!query) {
    return res.status(400).json({ error: 'Ingen sökterm angiven' });
  }

  try {
    const stmt = db.prepare(`
      SELECT * FROM films 
      WHERE LOWER(title) LIKE ? 
      OR LOWER(genre) LIKE ?
    `);
  

    const results = stmt.all(`%${query}%`, `%${query}%`);

    if (results.length === 0) {
      console.log('No results found for query:', query);
      return res.json([]);  // Skicka en tom lista istället för 404
    }

    // Om resultat hittas, skicka tillbaka dem som JSON
    res.json(results);
  } catch (err) {
    res.status(500).send("Något gick fel när vi hämtade filmerna.");
  }
});



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
      res.json(films); 
    } else {
      res.status(404).json({ message: "Inga filmer hittades för den här genren." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Något gick fel när vi hämtade filmerna.");
  }
});
// Set up express server
const express = require("express");
const { LocalStorage } = require("node-localstorage");
const app = express();
const PORT = 3000;

// Store data locally
const localStorage = new LocalStorage("./scratch");

// Middleware function
app.use(express.json());

// GET route to retieve data
app.get("/item/:key", (req, res) => {
  let key = req.params.key;
  // 'localStorage.getItem' gets item out of storage
  let value = localStorage.getItem(key);
  if (value) {
    res.json({ value });
  } else {
    res.status(404).json({ error: `Item with key '${key}' not found` });
  }
});

// POST route to store data
app.post("/item", (req, res) => {
  const { key, value } = req.body;

  localStorage.setItem(key, value);
  res.json({ message: `Item with key '${key}' stored successfully` });
});

// Run server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});

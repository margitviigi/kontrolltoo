const fs = require("fs/promises");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

const mealsPath = path.join(__dirname, "data", "meals.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(cors());


async function readData() {
  try {
    await fs.access(mealsPath); 
    const jsonData = await fs.readFile(mealsPath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading meals.json:", error);
    return []; 
  }
}

app.get("/meals", async (req, res) => {
  try {
    const meals = await readData();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: "Error reading meals data" });
  }
});

app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});


app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
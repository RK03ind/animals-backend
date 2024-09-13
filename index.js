const express = require("express");
const animalRoutes = require("./routes/animalRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/animals", animalRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

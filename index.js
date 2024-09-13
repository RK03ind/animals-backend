import express from "express";
import animalRoutes from "./routes/animalRoutes.js";
import { initDB } from "./config/db.js";

import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

initDB();

app.use(express.json());
app.use("/animals", animalRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

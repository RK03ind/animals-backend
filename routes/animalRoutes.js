const express = require("express");
const {
  getAllAnimals,
  addAnimal,
  updateAnimal,
  deleteAnimal,
} = require("../controllers/animalController");

const router = express.Router();

router.get("/", getAllAnimals);

router.post("/", addAnimal);

router.put("/:id", updateAnimal);

router.delete("/:id", deleteAnimal);

module.exports = router;

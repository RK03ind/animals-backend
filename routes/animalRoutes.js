import { Router } from "express";
import {
  getAllAnimals,
  addAnimal,
  updateAnimal,
  deleteAnimal,
} from "../controllers/animalController.js";

const router = Router();

router.get("/", getAllAnimals);

router.post("/", addAnimal);

router.put("/:id", updateAnimal);

router.delete("/:id", deleteAnimal);

export default router;

import { db } from "../config/db.js";

export async function getAllAnimals(req, res) {
  await db.read();
  res.json(db.data.animals);
}

export async function addAnimal(req, res) {
  const { name, species } = req.body;
  if (!name || !species) {
    return res.status(400).json({ message: "Name and species are required" });
  }
  const newAnimal = { id: db.data.animals.length + 1, name, species };
  db.data.animals.push(newAnimal);
  await db.write();
  res.status(201).json(newAnimal);
}

export async function updateAnimal(req, res) {
  const { id } = req.params;
  const { name, species } = req.body;

  await db.read();
  const animal = db.data.animals.find((animal) => animal.id == id);

  if (!animal) {
    return res.status(404).json({ message: "Animal not found" });
  }

  if (name) animal.name = name;
  if (species) animal.species = species;

  await db.write();
  res.json(animal);
}

export async function deleteAnimal(req, res) {
  const { id } = req.params;

  await db.read();
  const animalIndex = db.data.animals.findIndex((animal) => animal.id == id);

  if (animalIndex === -1) {
    return res.status(404).json({ message: "Animal not found" });
  }

  db.data.animals.splice(animalIndex, 1);
  await db.write();
  res.status(204).send();
}

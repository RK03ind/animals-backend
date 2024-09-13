const { Low, JSONFile } = require("lowdb");
const path = require("path");

const file = path.join(__dirname, "db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

const initDB = async () => {
  await db.read();
  db.data = db.data || { animals: [] };
  await db.write();
};

module.exports = { db, initDB };

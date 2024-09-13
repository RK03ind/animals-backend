import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, "db.json");
const adapter = new JSONFile(file);
export const db = new Low(adapter);

export const initDB = async () => {
  await db.read();
  db.data = db.data || { animals: [] };
  await db.write();
};

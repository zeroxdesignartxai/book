import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";

const dataDir = path.resolve(process.cwd(), "../../data");
const dbPath = path.join(dataDir, "codex.db");

export const db = new Database(dbPath);

export function migrate() {
  fs.mkdirSync(dataDir, { recursive: true });
  const migrationDir = path.resolve(process.cwd(), "migrations");
  const files = fs
    .readdirSync(migrationDir)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  db.exec("CREATE TABLE IF NOT EXISTS migrations (id TEXT PRIMARY KEY)");
  const applied = new Set(
    db.prepare("SELECT id FROM migrations").all().map((row: { id: string }) => row.id)
  );

  for (const file of files) {
    if (applied.has(file)) {
      continue;
    }
    const sql = fs.readFileSync(path.join(migrationDir, file), "utf8");
    db.exec(sql);
    db.prepare("INSERT INTO migrations (id) VALUES (?)").run(file);
  }
}

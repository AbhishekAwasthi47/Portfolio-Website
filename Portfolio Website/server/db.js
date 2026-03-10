import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'portfolio.sqlite');
const db = new sqlite3.Database(dbPath);

export const initDB = () => {
    db.serialize(async () => {
        // Contacts Table
        db.run(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Users (Admin) Table
        db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `);

        // Create default admin user if one doesn't exist
        db.get('SELECT * FROM users WHERE username = ?', ['admin'], async (err, row) => {
            if (!row) {
                // Default password is 'admin123' - user should change it in production
                const hashedPassword = await bcrypt.hash('admin123', 10);
                db.run('INSERT INTO users (username, password) VALUES (?, ?)', ['admin', hashedPassword]);
                console.log('Default admin user created (admin / admin123)');
            }
        });

        console.log('SQLite Database initialized');
    });
};

export default db;

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');

// Enable foreign keys
db.run('PRAGMA foreign_keys = ON;');

db.serialize(() => {
    // Projects table
    db.run(`
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slug TEXT NOT NULL UNIQUE,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            body TEXT NOT NULL,
            front_image TEXT NOT NULL,
            image1 TEXT,
            image2 TEXT,
            image3 TEXT,
            image4 TEXT,
            date_created DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Music table
    db.run(`
        CREATE TABLE IF NOT EXISTS music (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slug TEXT NOT NULL UNIQUE,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            body TEXT NOT NULL,
            image TEXT NOT NULL,
            date_created DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // Ratings for projects
    db.run(`
        CREATE TABLE IF NOT EXISTS ratings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            project_id INTEGER NOT NULL,
            rating INTEGER NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        )
    `);

    // Comments for projects
    db.run(`
        CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            project_id INTEGER NOT NULL,
            name TEXT,
            content TEXT NOT NULL,
            date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        )
    `);

    // Ratings for music
    db.run(`
        CREATE TABLE IF NOT EXISTS music_ratings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            music_id INTEGER NOT NULL,
            rating INTEGER NOT NULL,
            FOREIGN KEY (music_id) REFERENCES music(id) ON DELETE CASCADE
        )
    `);

    // Comments for music
    db.run(`
        CREATE TABLE IF NOT EXISTS music_comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            music_id INTEGER NOT NULL,
            name TEXT,
            content TEXT NOT NULL,
            date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (music_id) REFERENCES music(id) ON DELETE CASCADE
        )
    `);
});

module.exports = db;

const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); // Important for parsing JSON

// ------------------- PROJECTS -------------------

// Get all projects with average rating
app.get('/projects', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(AVG(r.rating),0) as average_rating
        FROM projects p
        LEFT JOIN ratings r ON p.id = r.project_id
        GROUP BY p.id
    `;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Get a single project by slug with comments
app.get('/projects/:slug', (req, res) => {
    const { slug } = req.params;

    db.get(
        `SELECT p.*, IFNULL(AVG(r.rating), 0) AS average_rating
         FROM projects p
         LEFT JOIN ratings r ON p.id = r.project_id
         WHERE p.slug = ?
         GROUP BY p.id`,
        [slug],
        (err, project) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!project) return res.status(404).json({ error: 'Project not found' });

            // Now use project.id (not undefined "id")
            db.all('SELECT * FROM comments WHERE project_id = ?', [project.id], (err, comments) => {
                if (err) return res.status(500).json({ error: err.message });
                project.comments = comments;
                res.json(project);
            });
        }
    );
});

// Add a new project
app.post('/projects', (req, res) => {
    const { title, description, body, front_image, image1, image2, image3, image4, slug } = req.body;

    if (!title || !description || !body || !front_image || !image1 || !image2 || !image3 || !image4 || !slug) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    db.run(
        `INSERT INTO projects 
         (title, description, body, front_image, image1, image2, image3, image4, slug)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, description, body, front_image, image1, image2, image3, image4, slug],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID, title, description, body, front_image, image1, image2, image3, image4, slug });
        }
    );
});

// Add comment to project
// Add comment to project (using slug)
app.post('/projects/:slug/comments', (req, res) => {
    const { slug } = req.params;
    const { content, name } = req.body;

    if (!content || !name) return res.status(400).json({ error: 'Content and name are required' });

    // 1️⃣ Find the project by slug
    db.get('SELECT id FROM projects WHERE slug = ?', [slug], (err, project) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!project) return res.status(404).json({ error: 'Project not found' });

        // 2️⃣ Insert the comment using the project ID
        db.run(
            'INSERT INTO comments (project_id, name, content) VALUES (?, ?, ?)',
            [project.id, name, content],
            function (err) {
                if (err) return res.status(500).json({ error: err.message });
                res.status(201).json({
                    id: this.lastID,
                    project_id: project.id,
                    slug,
                    name,
                    content,
                });
            }
        );
    });
});

// Rate a project
app.post('/projects/:id/rate', (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) return res.status(400).json({ error: 'Rating must be 1-5' });

    db.run(
        'INSERT INTO ratings (project_id, rating) VALUES (?, ?)',
        [id, rating],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID, project_id: id, rating });
        }
    );
});

// ------------------- MUSIC -------------------

// Get all music with average rating
app.get('/music', (req, res) => {
    const sql = `
        SELECT m.*, IFNULL(AVG(r.rating),0) as average_rating
        FROM music m
        LEFT JOIN music_ratings r ON m.id = r.music_id
        GROUP BY m.id
    `;
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Get a single music item with comments
app.get('/music/:id', (req, res) => {
    const { id } = req.params;

    db.get(
        `SELECT m.*, IFNULL(AVG(r.rating),0) as average_rating
         FROM music m
         LEFT JOIN music_ratings r ON m.id = r.music_id
         WHERE m.id = ?
         GROUP BY m.id`,
        [id],
        (err, music) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!music) return res.status(404).json({ error: 'Music not found' });

            db.all('SELECT * FROM music_comments WHERE music_id = ?', [id], (err, comments) => {
                if (err) return res.status(500).json({ error: err.message });
                music.comments = comments;
                res.json(music);
            });
        }
    );
});

// Add new music
app.post('/music', (req, res) => {
    const { title, description, body, image } = req.body;
    if (!title || !description || !body || !image) return res.status(400).json({ error: 'All fields are required' });

    db.run(
        'INSERT INTO music (title, description, body, image) VALUES (?, ?, ?, ?)',
        [title, description, body, image],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID, title, description, body, image });
        }
    );
});

// Add comment to music
app.post('/music/:id/comments', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: 'Content is required' });

    db.run(
        'INSERT INTO music_comments (music_id, content) VALUES (?, ?)',
        [id, content],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID, music_id: id, content });
        }
    );
});

// Rate music
app.post('/music/:id/rate', (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 5) return res.status(400).json({ error: 'Rating must be 1-5' });

    db.run(
        'INSERT INTO music_ratings (music_id, rating) VALUES (?, ?)',
        [id, rating],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id: this.lastID, music_id: id, rating });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

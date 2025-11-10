const express = require('express');
const cors = require('cors');
const db = require('./database');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json()); // Important for parsing JSON

// ------------------- PROJECTS -------------------

// Get all projects with average rating, ordered by sort_order
app.get('/projects', (req, res) => {
    const sql = `
        SELECT p.*, IFNULL(AVG(r.rating), 0) AS average_rating
        FROM projects p
        LEFT JOIN ratings r ON p.id = r.project_id
        GROUP BY p.id
        ORDER BY p.sort_order DESC
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

// Add comment to project (using slug)
app.post('/projects/:slug/comments', (req, res) => {
    const { slug } = req.params;
    const { content, name } = req.body;

    if (!content || !name) return res.status(400).json({ error: 'Content and name are required' });

    // 1️⃣ Find the project by slug
    db.get('SELECT id FROM projects WHERE slug = ?', [slug], (err, project) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!project) return res.status(404).json({ error: 'Project not found' });

        if (name.length > 100) {
            return res.status(400).json({ error: 'Name is too long' });
        }

        if (content.length > 500) {
            return res.status(400).json({ error: 'Content is too long' });
        }

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


function getClientIp(req) {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    ip = ip.split(',')[0].trim(); // take first if multiple
    // optional: strip IPv6 prefix ::ffff:
    if (ip.startsWith('::ffff:')) ip = ip.substring(7);
    return ip;
}

// Rate a project by slug (one rating per IP)
app.post('/projects/:slug/rate', (req, res) => {
    const { slug } = req.params;
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating must be 1–5' });
    }

    const ip = getClientIp(req);

    // Step 1: Find project by slug
    db.get('SELECT id FROM projects WHERE slug = ?', [slug], (err, project) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!project) return res.status(404).json({ error: 'Projektet hittades ej' });

        const projectId = project.id;

        // Step 2: Check if this IP already rated this project
        db.get(
            'SELECT id FROM ratings WHERE project_id = ? AND ip_adress = ?',
            [projectId, ip],
            (err, existing) => {
                if (err) return res.status(500).json({ error: err.message });
                if (existing) {
                    // IP has already rated this project
                    return res.status(400).json({ error: 'Du har redan betygsatt det här projektet' });
                }

                // Step 3: Insert rating
                db.run(
                    'INSERT INTO ratings (project_id, rating, ip_adress) VALUES (?, ?, ?)',
                    [projectId, rating, ip],
                    function (err) {
                        if (err) return res.status(500).json({ error: err.message });
                        res.status(201).json({
                            id: this.lastID,
                            project_slug: slug,
                            project_id: projectId,
                            rating
                        });
                    }
                );
            }
        );
    });
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

// Get a single music item by slug with comments
app.get('/music/:slug', (req, res) => {
    const { slug } = req.params;

    db.get(
        `SELECT m.*, IFNULL(AVG(r.rating), 0) as average_rating
         FROM music m
         LEFT JOIN music_ratings r ON m.id = r.music_id
         WHERE m.slug = ?
         GROUP BY m.id`,
        [slug],
        (err, music) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!music) return res.status(404).json({ error: 'Music not found' });

            db.all(
                'SELECT * FROM music_comments WHERE music_id = ?',
                [music.id],
                (err, comments) => {
                    if (err) return res.status(500).json({ error: err.message });
                    music.comments = comments;
                    res.json(music);
                }
            );
        }
    );
});

// Add comment to music (using slug)
app.post('/music/:slug/comments', (req, res) => {
    const { slug } = req.params;
    const { content, name } = req.body;

    if (!content || !name) return res.status(400).json({ error: 'Content and name are required' });

    // Find the music item by slug
    db.get('SELECT id FROM music WHERE slug = ?', [slug], (err, music) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!music) return res.status(404).json({ error: 'Music not found' });

        if (name.length > 100) {
            return res.status(400).json({ error: 'Name is too long' });
        }

        if (content.length > 500) {
            return res.status(400).json({ error: 'Content is too long' });
        }

        // Insert the comment using the music ID
        db.run(
            'INSERT INTO music_comments (music_id, name, content) VALUES (?, ?, ?)',
            [music.id, name, content],
            function (err) {
                if (err) return res.status(500).json({ error: err.message });
                res.status(201).json({
                    id: this.lastID,
                    music_id: music.id,
                    slug,
                    name,
                    content,
                });
            }
        );
    });
});

// Rate a song by slug (one rating per IP)
app.post('/music/:slug/rate', (req, res) => {
    const { slug } = req.params;
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Betyget måste vara 1-5' });
    }

    const ip = getClientIp(req);

    console.log(ip);

    // Step 1: Find project by slug
    db.get('SELECT id FROM music WHERE slug = ?', [slug], (err, music) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!music) return res.status(404).json({ error: 'Låten hittades ej' });

        const musicId = music.id;

        console.log(musicId);

        // Step 2: Check if this IP already rated this project
        db.get(
            'SELECT id FROM music_ratings WHERE music_id = ? AND ip_adress = ?',
            [musicId, ip],
            (err, existing) => {
                console.log('Existing rating:', existing);
                if (err) return res.status(500).json({ error: err.message });
                if (existing) {
                    // IP has already rated this project
                    return res.status(400).json({ error: 'Du har redan betygsatt den här låten' });
                }

                // Step 3: Insert rating
                db.run(
                    'INSERT INTO music_ratings (music_id, rating, ip_adress) VALUES (?, ?, ?)',
                    [musicId, rating, ip],
                    function (err) {
                        if (err) return res.status(500).json({ error: err.message });
                        res.status(201).json({
                            id: this.lastID,
                            music_slug: slug,
                            music_id: musicId,
                            rating
                        });
                    }
                );
            }
        );
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

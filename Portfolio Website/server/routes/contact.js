import express from 'express';
import db from '../db.js';

const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    // Save to SQLite Database
    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.run(query, [name, email, message], function (err) {
        if (err) {
            console.error('Error saving contact to DB:', err);
            return res.status(500).json({ error: 'Failed to submit form.' });
        }

        console.log(`New contact form submission saved! (ID: ${this.lastID})`);

        // Send success response
        res.status(200).json({
            success: true,
            message: 'Thank you for reaching out! I will get back to you shortly.'
        });
    });
});

export default router;

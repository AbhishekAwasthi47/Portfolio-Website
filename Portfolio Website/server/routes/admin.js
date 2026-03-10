import express from 'express';
import db from '../db.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Get all contacts - Protected by JWT Auth Middleware
router.get('/contacts', authMiddleware, (req, res) => {
    db.all('SELECT * FROM contacts ORDER BY created_at DESC', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve contacts' });
        }
        res.status(200).json(rows);
    });
});

export default router;

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Please provide username and password.' });
    }

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password.' });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid username or password.' });
        }

        const defaultSecret = 'fallback_secret_for_local_dev';
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || defaultSecret,
            { expiresIn: '2h' }
        );

        res.status(200).json({ token, message: 'Logged in successfully' });
    });
});

export default router;

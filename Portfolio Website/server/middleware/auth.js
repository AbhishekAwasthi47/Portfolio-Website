import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const defaultSecret = 'fallback_secret_for_local_dev';
        const decoded = jwt.verify(
            token.replace('Bearer ', ''),
            process.env.JWT_SECRET || defaultSecret
        );
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

export default authMiddleware;

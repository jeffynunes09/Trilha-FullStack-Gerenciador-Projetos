import jwt from 'jsonwebtoken';
import User from '../MODEL/UserSchema.js';
import "dotenv/config";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "The token was not informed!" });
  }

  const parts = authHeader.split(" ");
  if (parts.length !== 2) {
    return res.status(401).send({ message: "Invalid token!" });
  }

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: "Malformatted Token!" });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) return res.status(401).send({ message: "Invalid token!" });

    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).send({ message: "Invalid token!" });

    req.userId = user.id;
    next();
  });
}

export default authMiddleware;

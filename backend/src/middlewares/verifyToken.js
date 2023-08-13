import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
  const { TokenUser } = req.cookies;
  if (!TokenUser) {
    return res.status(403).json({ code: 403, isAuth: false });
  }

  const decoded = jwt.verify(TokenUser, process.env.TOKEN_KEY);
  if (!decoded) {
    return res.status(401).json({ code: 401, message: 'Invalid Token' });
  }

  req.id = decoded._id;
  return next();
}

export default verifyToken;

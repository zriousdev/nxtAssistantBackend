const admin = require('../config/firebase');

const guestIdFromRequest = (req) =>
  req.headers['x-guest-id'] ||
  req.query?.guestId ||
  req.body?.guestId;

const attachGuestUser = (req) => {
  const guestId = guestIdFromRequest(req)?.toString().trim() || '';
  if (!guestId) return false;

  req.user = {
    uid: `guest:${guestId}`,
    guestId,
    isGuest: true,
    name: 'there',
  };
  return true;
};

const verifyFirebaseToken = async (req, res, next) => {
  if (!admin) {
    return res.status(503).json({
      success: false,
      message: 'Firebase authentication is not configured on the server',
    });
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: No token provided',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying Firebase token:', error);
    return res.status(403).json({
      success: false,
      message: 'Unauthorized: Invalid token',
    });
  }
};

const resolveUserContext = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    if (!admin) {
      return res.status(503).json({
        success: false,
        message: 'Firebase authentication is not configured on the server',
      });
    }

    const token = authHeader.split(' ')[1];

    try {
      req.user = await admin.auth().verifyIdToken(token);
      return next();
    } catch (error) {
      console.error('Error verifying Firebase token:', error);
      return res.status(403).json({
        success: false,
        message: 'Unauthorized: Invalid token',
      });
    }
  }

  if (attachGuestUser(req)) {
    return next();
  }

  return res.status(401).json({
    success: false,
    message: 'Unauthorized: No token or guest session provided',
  });
};

module.exports = { verifyFirebaseToken, resolveUserContext };

const express = require('express');
const router = express.Router();
const { syncUser } = require('../controllers/authController');
const { verifyFirebaseToken, resolveUserContext } = require('../middleware/middleware');
const { sendMessage, getChatHistory } = require('../controllers/chatController');
const { getSuggestions } = require('../controllers/suggestionController');

router.post('/google-login', verifyFirebaseToken, syncUser);
router.post('/send-message', resolveUserContext, sendMessage);
router.get('/chat-history', resolveUserContext, getChatHistory);
router.get('/suggestions', getSuggestions);
module.exports = router;

const express = require('express');
const router = express.Router();
const { syncUser } = require('../controllers/authController');
const verifyFirebaseToken = require('../middleware/middleware');
const { sendMessage, getChatHistory } = require('../controllers/chatController');
const { getSuggestions } = require('../controllers/suggestionController');

router.post('/google-login', verifyFirebaseToken, syncUser);
router.post('/send-message', verifyFirebaseToken, sendMessage);
router.get('/chat-history', verifyFirebaseToken, getChatHistory);
router.get('/suggestions', verifyFirebaseToken, getSuggestions);
module.exports = router;

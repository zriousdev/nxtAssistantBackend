const { WebSocketServer } = require('ws');
const url = require('url');
const admin = require('firebase-admin');
const { _dummyReply } = require('../controllers/chatController');
const Chat = require('../models/chat');

const newSessionId = () => `session_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

function initWebSocket(server) {
  const wss = new WebSocketServer({ server, path: '/api/ws/chat' });

  wss.on('connection', async (ws, req) => {
    const { token, guestId } = url.parse(req.url, true).query;
    let uid;

    const normalizedGuestId = guestId?.toString().trim() || '';
    const hasToken = token && token !== 'null' && token !== 'undefined';

    if (hasToken) {
      if (!admin) {
        ws.close(4500, 'Auth unavailable');
        return;
      }

      try {
        const decoded = await admin.auth().verifyIdToken(token);
        uid = decoded.uid;
      } catch {
        ws.close(4001, 'Unauthorized');
        return;
      }
    } else if (normalizedGuestId) {
      uid = `guest:${normalizedGuestId}`;
    } else {
      ws.close(4001, 'Unauthorized');
      return;
    }

    console.log(`WS connected: ${uid}`);

    ws.on('message', async (raw) => {
      let data;
      try { data = JSON.parse(raw); } catch { return; }

      if (data.type !== 'message' || !data.message?.trim()) return;

      const text = data.message.trim();
      const sessionId = data.sessionId?.toString().trim() || newSessionId();

      ws.send(JSON.stringify({ type: 'typing', sessionId }));

      await Chat.create({ userId: uid, sessionId, sender: 'user', message: text });

      const replyText = _dummyReply(text);

      await new Promise(r => setTimeout(r, 800));

      await Chat.create({ userId: uid, sessionId, sender: 'assistant', message: replyText });
      ws.send(JSON.stringify({ type: 'reply', message: replyText, sessionId }));
    });

    ws.on('close', () => console.log(`WS disconnected: ${uid}`));
  });
}

module.exports = { initWebSocket };

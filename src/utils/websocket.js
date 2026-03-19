const { WebSocketServer } = require('ws');
const url                 = require('url');
const admin               = require('firebase-admin');
const { _dummyReply }     = require('../controllers/chatController');
const Chat                = require('../models/chat');

function initWebSocket(server) { 
  const wss = new WebSocketServer({ server, path: '/api/ws/chat' });

  wss.on('connection', async (ws, req) => {
    const { token } = url.parse(req.url, true).query;
    let uid;
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      uid = decoded.uid;
    } catch {
      ws.close(4001, 'Unauthorized');
      return;
    }

    console.log(`WS connected: ${uid}`);

    ws.on('message', async (raw) => {
      let data;
      try { data = JSON.parse(raw); } catch { return; }

      if (data.type !== 'message' || !data.message?.trim()) return;

      const text = data.message.trim();

      ws.send(JSON.stringify({ type: 'typing' }));

      await Chat.create({ userId: uid, sender: 'user', message: text });

      const replyText = _dummyReply(text);

      await new Promise(r => setTimeout(r, 800));

      await Chat.create({ userId: uid, sender: 'assistant', message: replyText });
      ws.send(JSON.stringify({ type: 'reply', message: replyText }));
    });

    ws.on('close', () => console.log(`WS disconnected: ${uid}`));
  });
}

module.exports = { initWebSocket };
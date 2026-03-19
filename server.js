require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const http = require('http');
const {initWebSocket} = require('./src/utils/websocket');
const mid = express();

const wsServer=http.createServer(mid);
initWebSocket(wsServer);

mid.use(cors());

mid.use(express.json());

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error('checkUrl');
  process.exit(1);
}

mongoose.connect(mongoUrl)
.then(() => console.log('mongo connected.')).catch(err => console.error('mongo connection error', err));

mid.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;

wsServer.listen(PORT, () => console.log(`server should be running on port ${PORT}`));

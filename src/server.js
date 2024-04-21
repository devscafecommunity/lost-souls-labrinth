const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const SocketManager = require('./socketManager');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const socketManager = new SocketManager(io);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
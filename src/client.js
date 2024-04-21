const socket = require('socket.io-client')('http://localhost:3000');
const readlineSync = require('readline-sync');

// Setup input
readlineSync.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  // Handle WASD movement
  if (key.name === 'w') {
    socket.emit('move', 'up');
  } else if (key.name === 'a') {
    socket.emit('move', 'left');
  } else if (key.name === 's') {
    socket.emit('move', 'down');
  } else if (key.name === 'd') {
    socket.emit('move', 'right');
  }
});

// Other game logic as needed
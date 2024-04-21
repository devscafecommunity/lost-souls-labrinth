const fs = require("fs");

class SocketManager {
  constructor(io) {
    this.io = io;
    this.players = {};
    this.enemies = [];

    this.io.on("connection", (socket) => {
      console.log("New connection:", socket.id);

      // Load events dynamically
      this.eventHandler("./events/", socket);
    });
  }

  eventHandler(eventspath, socket) {
    // Read all files in the events directory
    fs.readdirSync(eventspath).forEach((file) => {
      // Load each event handler file
      if (file.endsWith(".js")) {
        const eventHandlers = require(eventspath + file);
        for (const event in eventHandlers) {
          // Attach event handlers to socket
          socket.on(event, (data) => {
            eventHandlers[event](socket, data);
          });
        }
      }
    });
  }

  // Add methods for game logic
}

module.exports = SocketManager;
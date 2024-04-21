module.exports = {
    moveUp: function (socket, data) {
        const playerId = socket.id;
        console.log("Player", playerId, "moved up");
    }
}
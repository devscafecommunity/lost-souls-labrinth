module.exports = {
    moveRight: function (socket, data) {
        const playerId = socket.id;
        console.log("Player", playerId, "moved right");
    }
}

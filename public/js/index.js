const socket = io();

function sendMessage() {
  socket.emit("addNewMessage", "mis huevos");
}

sendMessage();

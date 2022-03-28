const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Metemos el bodyparser.

//Socket
io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("addNewMessage", (message) => {});
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/html", { extensions: ["html"] }));

app.use(
  "/js",
  express.static(__dirname + "/node_modules/socket.io/client-dist")
);

//TAKE NOTE: Server has to listen, not app.
server.listen(1111, () => {
  console.log("Server is running at port 1111");
});

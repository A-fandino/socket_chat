const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});
const PORT = 8080;

http.listen(PORT, () => console.log(`Listening on *:${PORT}`));

io.on("connection", (socket) => {
  console.log("new client");
  socket.on("message", (evt) => {
    console.log(evt);
    socket.broadcast.emit("message", {
      user: evt.User.username,
      msg: evt.msg,
    });
  });
});

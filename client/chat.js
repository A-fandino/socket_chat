function Chat(User) {
  const io = require("socket.io-client");
  const socket = io.connect("http://localhost:8080");
  const prompt = require("prompt-sync")({ sigint: true });
  const repl = require("repl");
  const chalk = require("chalk");
  socket.on("connect", function (sock) {
    console.log("Connected");
  });
  socket.on("message", (socket) => {
    console.log(`${chalk.yellow(socket.user)}: ${socket.msg}`);
  });
  console.log(chalk.bgCyan("==Start Chatting=="));
  repl.start({
    prompt: chalk.green("You:"),
    eval: (text) => {
      const msg = text.split("\n")[0];
      socket.send({ User, msg });
    },
  });
}

module.exports = Chat;

const prompt = require("prompt-sync")({ sigint: true });
const Chat = require("./chat");

let username;

while (!username) {
  username = prompt("Username:");
  !username && console.log("ENTER A VALID USERNAME");
}

Chat({ username });

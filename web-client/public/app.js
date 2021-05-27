const IP = "192.168.43.228"; //ex_ip
const socket = io.connect("ws://" + IP + ":8080");

socket.on("message", (msg) => {
  addMessage(msg);
});

document.getElementById("send").onclick = () => {
  const input = document.querySelector("input");
  const text = input.value;
  input.value = "";
  addMessage({ user: "You", msg: text });
  socket.send({ User: { username: "Anonymous" }, msg: text });
};

const addMessage = (msg) => {
  const liMess = document.createElement("li");
  liMess.innerHTML = `<b>${msg.user}:</b> ${msg.msg}`;
  document.getElementById("chat-box").appendChild(liMess);
};

const IP = "192.168.43.228"; //ex_ip
const socket = io.connect("ws://" + IP + ":8080");
const form = document.getElementById("form");
const input = document.getElementById("text-input");
const username = window.localStorage.getItem("name");

input.onkeypress = () => {
  socket.emit("typing", username);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

socket.on("message", (msg) => {
  console.log(msg.id);
  addMessage(msg);
});

document.getElementById("send").onclick = () => {
  const input = document.querySelector("input");
  const text = input.value;
  input.value = "";
  addMessage({ user: "You", msg: text });
  socket.send({ User: { username }, msg: text });
};

const addMessage = (msg) => {
  const liMess = document.createElement("li");
  const userDisp = msg.user !== "You" ? `<b>${msg.user}:</b>` : "";
  liMess.innerHTML = `${userDisp} ${msg.msg}`;
  if (msg.user === "You") liMess.classList = "self";
  document.getElementById("chat-box").appendChild(liMess);
};

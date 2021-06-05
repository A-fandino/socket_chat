const input = document.getElementById("input");
const btn = document.getElementById("button");

btn.onclick = () => {
  window.localStorage.setItem("name", input.value);
  window.location.replace("/");
};

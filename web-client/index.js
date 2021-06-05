const express = require("express");
const app = express();
const PORT = 80;

app.use(express.static("public"));
app.set("view engine", "pug");
app.listen(PORT, () => console.log(`Listening on *:${PORT}`));

app.get("/login", (req, res) => {
  res.render("login", { title: "Login", message: "Hi" });
});

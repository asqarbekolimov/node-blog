const express = require("express");
const path = require("path");
const expressEdge = require("express-edge");

const app = express();

app.use(express.static("public"));
app.use(expressEdge.engine);
app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages", "post.html"));
});

app.listen(5000, () => {
  console.log("Server has been started on port 5000");
});

const path = require("path");

const express = require("express");
const app = express();

// console.log(__dirname);

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hii");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

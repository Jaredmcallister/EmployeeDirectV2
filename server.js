const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

//const employees = require("./employees");

app.use("/employees", require("./router.js"));

app.listen(PORT, () => {
  (`Listening on port ${PORT}...`);
});

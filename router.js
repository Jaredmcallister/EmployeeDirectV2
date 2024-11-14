const express = require("express");
const router = express.Router();
module.exports = router;
const employees = require("./employees.js")
router.get("/", (req, res) => {
  res.json(employees);
});

router.get("/random", (req, res) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const employee = employees.find((e) => e.id === +id);
  if (employee) {
    res.json(employee);
  } else {
    next.status(404).send(`There is no employee with id ${id}.`);
  }
});
router.post("/new", (req, res) => {
  const { employeeName } = req.body
  const newEmployees = employees.push(employeeName);
  res.status(201).send({ message: "Added the name", employees });

})
router.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found." });
})
router.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status ?? 500);
  res.json(err.message ?? "Sorry, something went wrong.");
});
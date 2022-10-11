const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 9876;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ola Mundo" });
});

app.post("/", (req, res) => {
  const { name, password } = req.body;
  res.status(200).json({ data: { name, password } });
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});

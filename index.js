const express = require("express");
const app = express();
const cors = require("cors")
const phonesData = require("./phonesData.json");

const port = 50001;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello worl");
});

app.get("/phones", (req, res) => {
  res.send(phonesData);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phonesData.phones.find((phn) => phn.id === id);

  res.send(phone || {});
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});

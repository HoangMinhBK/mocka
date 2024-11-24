const express = require("express");
const { generateDataFromSchema } = require("./schemaParser");
const schema = require("../examples/user-schema.json");

const app = express();
const port = 3000;

app.get("/api/data", (req, res) => {
  const data = generateDataFromSchema(schema);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});

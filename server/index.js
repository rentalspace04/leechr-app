require("dotenv").config();

const express = require("express");

const api = require("./api");

const errorHandler = require("./errors");

const app = express();
const port = process.env.PORT || 3001;

app.set("port", port);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

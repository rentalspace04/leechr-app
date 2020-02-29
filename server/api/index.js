const express = require("express");

const router = express.Router();

const pool = require("../db");

const users = require("./users");
const events = require("./events");

router.use("/users", users);
router.use("/events", events);

router.get("/hello", (req, response) => {
  pool.query(
    "SELECT table_schema,table_name FROM information_schema.tables;",
    (err, result) => {
      if (err) throw err;
      let out = "";
      for (let row of result.rows) {
        out += JSON.stringify(row);
      }

      response.send(out);
    }
  );
});

router.get("/db", (req, response) => {
  pool.query("SELECT current_database();", (err, result) => {
    if (err) throw err;

    response.send(JSON.stringify(result));
  });
});

module.exports = router;

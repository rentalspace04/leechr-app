const express = require("express");

const router = express.Router();

const pool = require("../../db");

router.get("/get", (req, response) => {
  pool.query("SELECT * from users;", (err, result) => {
    if (err) throw err;

    response.json({ ...result.rows });
  });
});

router.post("/add", (req, response, next) => {
  const body = req.body;

  console.log(body, body.name);

  pool.query(
    "INSERT INTO users (name) VALUES ($1) RETURNING *;",
    [body.name],
    (err, result) => {
      if (err) {
        next(err);
        return;
      }

      response.json({ ...result.rows });
    }
  );
});

module.exports = router;

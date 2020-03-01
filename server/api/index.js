const _ = require("lodash");
const express = require("express");

const router = express.Router();

const pool = require("../db");

const users = require("./users");
const events = require("./events");

router.use("/users", users);
router.use("/events", events);

router.get("/db", (req, response) => {
  pool.query("SELECT current_database();", (err, result) => {
    if (err) throw err;

    response.send(JSON.stringify(result));
  });
});

router.get("/data", (req, response, next) => {
  const out = { error: false };
  pool
    .connect()
    .then(client => {
      client
        .query("SELECT * FROM users")
        .then(res => {
          out.users = [...res.rows];
        })
        .then(() => {
          return client.query("SELECT * FROM events");
        })
        .then(res => {
          out.events = [...res.rows];

          return client.query("SELECT * FROM eventparties");
        })
        .then(res => {
          const all_parties = res.rows;

          console.log("Received parties", all_parties);

          _.forEach(out.events, (event, i) => {
            const trans_id = event.trans_id;

            out.events[i].parties = _.filter(all_parties, { trans_id });
          });

          response.json(out);
        })
        .catch(err => next(err))
        .finally(() => {
          client.end();
        });
    })
    .catch(err => next(err));
});

module.exports = router;

const _ = require("lodash");
const Router = require("express-promise-router");

const router = Router();

const pool = require("../../db");

router.get("/get", (req, response) => {
  pool.query("SELECT * from events;", (err, result) => {
    if (err) throw err;

    response.json({ ...result.rows });
  });
});

router.post("/add", async (req, response, next) => {
  const body = req.body;

  pool.connect((err, client, done) => {
    const shouldAbort = err => {
      if (err) {
        console.error("Error in transaction", err.stack);
        client.query("ROLLBACK", err => {
          if (err) {
            console.error("Error rolling back client", err.stack);
          }
          // release the client back to the pool
          done();
          next(err);
        });
      }
      return !!err;
    };

    const out = { error: false };

    // Start Transaction
    client
      .query("BEGIN")
      .then(async () => {
        // Create initial event item
        const { from_user, amount, description } = body;
        let result = await client.query(
          "INSERT INTO events (from_user, amount, description) VALUES ($1, $2, $3) RETURNING *;",
          [from_user, amount, description]
        );

        out.event = { ...result.rows[0] };
        out.parties = [];

        const { trans_id } = result.rows[0];

        // Add all events
        const eventPartiesText =
          "INSERT INTO eventparties(trans_id, user_id, amount, description) VALUES ($1, $2, $3, $4) RETURNING *";

        for (let i = 0; i < _.size(body.parties); i++) {
          // Add each event individually
          const { user_id, amount, description = "" } = body.parties[i];
          result = await client.query(eventPartiesText, [
            trans_id,
            user_id,
            amount,
            description
          ]);

          out.parties = [...out.parties, ...result.rows];
        }

        //Commit result
        await client.query("COMMIT");

        // Send response
        response.json(out);

        // Release
        done();
      })
      .catch(err => {
        if (shouldAbort(err)) return;
      });
  });
});

module.exports = router;

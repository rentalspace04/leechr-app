const _ = require("lodash");

function errorHandler(err, req, res, next) {
  console.log("in error handler", err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.json({
    ..._.pick(err, ["name", "severity", "detail", "message"]),
    error: true
  });
}

module.exports = errorHandler;

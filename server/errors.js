const _ = require("lodash");

function errorHandler(err, req, res, next) {
  console.log("in error handler");
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.json(_.pick(err, ["name", "severity", "detail"]));
}

module.exports = errorHandler;

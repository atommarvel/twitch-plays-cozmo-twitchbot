var express = require('express');
var router = express.Router();


function getRouter(queue) {
  // TODO: allow api to add a queryparam of how many commands to receive in 1 request
  // TODO: add a secret key queryparam so that people poking at the api can't start screwing up the queue
  /* GET next queued command */
  router.get('/', function(req, res, next) {
      var command = queue.shift();
      if (!command) {
        res.json({
          "instruction": "!cc-none"
        });
      }
      res.json();
  });

  return router;
}

exports.getRouter = getRouter;

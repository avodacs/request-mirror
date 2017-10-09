const db = require('../helpers/db.js');
const express = require('express');
const moment = require('moment');
const router = express.Router();

/* Insert log record */
router.all(/\/(.{8})/, function (req, res, next) {
  let id = req.params[0];

  let protocol = req.protocol;
  if (req.headers['x-forwarded-proto'] !== undefined) {
    protocol = req.headers['x-forwarded-proto'];
  }

  db.insert(
    id,
    `${protocol}://${req.get('host')}${req.originalUrl}`,
    req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    req.method,
    req.headers,
    req.query,
    req.body,
    function () {
      res.send('ok');
    }
  );
});

module.exports = router;

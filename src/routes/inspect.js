const db = require('../helpers/db.js');
const express = require('express');
const router = express.Router();
const tokenHelper = require('../helpers/tokenHelper.js');

/* Generate new token */
router.get('/', function (req, res, next) {
  let id = tokenHelper.generateToken();

  res.redirect(`/inspect/${id}`);
});

/* Get inspection details */
router.get(/\/(.{8})/, function (req, res, next) {
  let id = req.params[0];
  let url = `${req.get('host')}/log/${id}`;

  let accept = req.headers.accept;

  if (accept === 'application/json') {
    db.get(id, function (data) {
      // Purge headers that we don't want to show
      let hiddenHeaders = ['x-forwarded-port', 'x-forwarded-for', 'connection', 'x-forwarded-proto'];

      data.forEach(function (record) {
        let keys = Object.keys(record.headers);

        hiddenHeaders.forEach(function (header) {
          if (keys.indexOf(header) > -1) {
            // Remove the key
            delete record.headers[header];
          }
        });
      });

      res.json(data);
    });
  } else {
    res.render('inspect', {
      token: id,
      url: url
    });
  }
});

module.exports = router;

const db = require('../helpers/db.js');
const express = require('express');
const router = express.Router();
const tokenHelper = require('../helpers/tokenHelper.js');

/* Generate new token */
router.get('/', function(req, res, next) {
  let id = tokenHelper.generateToken();

  res.redirect(`/inspect/${id}`);
});

/* Get inspection details */
router.get(/\/(.{8})/, function(req, res, next) {
  let id = req.params[0];
  let url = `${req.protocol}://${req.get('host')}/log/${id}`;

  let accept = req.headers.accept;

  if (accept === 'application/json') {
    db.get(id, function(data) {
      res.json(data);
    });
  } else {
    res.render('inspect', { token: id, url: url });
  }
});

module.exports = router;

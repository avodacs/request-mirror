const Datastore = require('nedb');

const db = new Datastore();

function setup() {
  db.ensureIndex({
    fieldName: 'id',
    expireAfterSeconds: 15
  });
}

function get(id, cb) {
  setup();

  db.find({
    id: id
  }).sort({
    timestamp: -1
  }).exec(function (err, data) {
    cb(data);
  });
}

function insert(id, url, clientIp, timestamp, method, headers, parameters, body, cb) {
  setup();

  let data = {
    id: id,
    url: url,
    clientIp: clientIp,
    timestamp: timestamp,
    method: method,
    headers: headers,
    parameters: parameters,
    body: body
  };

  db.insert(data);

  cb();
}

module.exports = {
  get,
  insert,
  setup
};

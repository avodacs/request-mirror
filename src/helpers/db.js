const Datastore = require('nedb');

const db = new Datastore({
  timestampData: true
});

function setup() {
  // Data expires after 4 hours
  db.ensureIndex({
    fieldName: 'createdAt',
    expireAfterSeconds: 14400
  });
}

function get(id, cb) {
  db.find({
    id: id
  }).sort({
    createdAt: -1
  }).exec(function (err, data) {
    cb(data);
  });
}

function insert(id, url, clientIp, method, headers, parameters, body, cb) {
  let data = {
    id: id,
    url: url,
    clientIp: clientIp,
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

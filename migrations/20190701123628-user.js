'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('user', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    full_name: {
      type: 'string',
      length: 40
    },
    dob: {
      type: 'date'
    },
    email: {
      type: 'string',
      length: 50
    },
  });
  return null;
};

exports.down = function(db) {
  db.dropTable('user');
  return null;
};

exports._meta = {
  "version": 1
};

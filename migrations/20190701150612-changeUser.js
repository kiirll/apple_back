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
  db.addColumn('user','name', {type: 'string'});
  db.addColumn('user','surname', {type: 'string'});
  db.addColumn('user','role', {type: 'string'});
  return null;
};

exports.down = function(db) {
  db.removeColumn('user','name')
  return null;
};

exports._meta = {
  "version": 1
};

const path = require('path');

function where(...paths) {
  return path.join.apply(null, [__dirname, './..'].concat(paths));
}

const Prefix = {
  doc: 'doc',
  dist: 'dist',
};

module.exports = {
  where,
  Prefix,
};

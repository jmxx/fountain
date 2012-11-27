var nib = require('nib');

module.exports = function () {
  return function(style) {
    style
      .use(nib())
      .include(__dirname);
  };
};

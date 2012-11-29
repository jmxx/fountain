var nib = require('nib')
  , stylus = require('stylus');

var fountain = exports = module.exports = function () {
  return function(style) {
    style
      .use(nib())
      .include(__dirname);
  };
};

exports.middleware = function (dirname) {
  console.log('Fountain middleware.');
  
  function compile(str, path) {
    return stylus(str)
      .set('filename', path)
      .use(fountain());
  }
  
  return stylus.middleware({
    src: dirname,
    force: true,
    compile: compile
  });
};


var assert = require('assert'),
    fs = require('fs'),
    spawn = require('child_process').spawn;

describe('jon', function() {
  it('should error if no path provided', function(done) {
    var jon = spawn('bin/jon');
    jon.on('close', function (code) {
      assert.notEqual(code, 0);
      done();
    });
  });
  it('should error if path provided resolves to no file', function(done) {
    var jon = spawn('bin/jon', ['no-file-exists-path.json']);
    jon.on('close', function (code) {
      assert.notEqual(code, 0);
      done();
    });
  });
  it('should get and print in valid JSON a dot-notation attribute');
  it('should update and print in valid JSON a dot-notation attribute');
});
"use strict";

var should = require("chai").should();
var smartcore = require("../");

describe('#versionGuard', function() {
  it('global._smartcore should be defined', function() {
    should.equal(global._smartcore, smartcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      smartcore.versionGuard('version');
    }).should.throw('More than one instance of smartcore');
  });
});

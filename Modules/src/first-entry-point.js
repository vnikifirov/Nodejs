//import fs from 'fs';
//import chai from 'chai';

// import of the lib for tests
var assert = require('chai').assert;
var expect = require('chai').expect;

// Import of the test object
var classBears = require('./src/modules/bears').classBears;

// Check test
describe('Launch TDD', function() {
    it('Should be true', function() {
        assert.isTrue(true, "[It's not true]");
    });
});

// Tests
describe('Test of the module "bears"', function() {
    it('Should be returned of the object instance', function() {
        assert.isObject(classBears);
    });
    it('Should be String value', function() {
        assert.isString(classBears.sayBears());
    });
    it('Should be equals of "bears!"', function() {
        expect(classBears.sayBears()).to.equal('bears!');
    });
});

// Conclution => All tests was passed
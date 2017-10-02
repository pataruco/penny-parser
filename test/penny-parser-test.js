const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const PennyParser = require('../assets/js/penny-parser.js');

describe('PennyParser', ( ) => {

    describe('Instantiation', ( ) => {

        it('should be an object', (done) => {
            const pennyParse = new PennyParser('432');
            assert.isObject(pennyParse);
            done();
        });
    });
});

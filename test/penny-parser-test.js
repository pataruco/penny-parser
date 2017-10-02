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

    describe('Output', ( ) => {

        describe('When you write a number string should return a number' , ( ) => {
            it('should return a number', () => {
                let pennyParse = new PennyParser('432');
                assert.isNumber( new PennyParser('432').number );
                // done();
            });
        })

        describe('When you write a number string plus lowercase p' , ( ) => {
            it('should return a number', () => {
                let pennyParse = new PennyParser('432p');
                assert.isNumber( pennyParse.number );
            });
        })

        describe('When you write lowercase p plus number string' , ( ) => {
            it('should return a number', () => {
                let pennyParseOne = new PennyParser('p432');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
            });
        })

        describe('When you write Sterling sign plus number string' , ( ) => {
            it('should return a number', () => {
                let pennyParseOne = new PennyParser('£432');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
            });
        })

    });
});

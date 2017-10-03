const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const PennyParser = require('../assets/js/penny-parser.js');

describe('PennyParser', ( ) => {

    describe('Instantiation', ( ) => {

        it('should be an object', () => {
            const pennyParse = new PennyParser('432');
            assert.isObject(pennyParse);
        });
    });

    describe('Output', ( ) => {

         // '432' => 432
        describe('When you write a number string' , ( ) => {
            it('should return a string number as number', () => {
                let pennyParse = new PennyParser('432');
                assert.isNumber( new PennyParser('432').number );
            });
        })

        // '213p' => 213
        describe('When you write a number string plus lowercase p' , ( ) => {
            it('should return a number string as number', () => {
                let pennyParse = new PennyParser('213p');
                assert.equal( pennyParse.number, 213 );
            });
        })

        //'£16.23p' => 1623
        describe('When you write lowercase p plus number string' , ( ) => {
            it('should return a number', () => {
                let pennyParseOne = new PennyParser('p432');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
            });
        })

        //'£14' => 1400
        describe('When you write Sterling sign plus number string' , ( ) => {
            it('should return a number', () => {
                let pennyParseOne = new PennyParser('£432');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
            });
        })

        //'£54.04' => 5404

        //'£23.333333' => 2333
        describe('When you write number string with a dot' , ( ) => {
            it('should return a number times 100', () => {
                let pennyParseOne = new PennyParser('16.23');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
                assert.equal( new PennyParser('16.23').number, 1623);
            });
        })

        //'001.41p' => 141

        //'13x' => 'invalid character'

        //'13.02p' => valid character in the wrong position

        //'£p' => missing values

    });
});

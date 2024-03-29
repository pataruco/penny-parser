const assert = require("chai").assert;
const PennyParser = require('../assets/js/penny-parser.js');
const expect = require('chai').expect;

describe('PennyParser', ( ) => {

    describe('Instantiation', ( ) => {

        it('should be an object', () => {
            const pennyParse = new PennyParser('432');
            assert.isObject(pennyParse);
        });
    });

    describe('Output', ( ) => {

         // '432' => 432
        describe('When you give a number string' , ( ) => {
            it('should return a string number as number', () => {
                let pennyParse = new PennyParser('432');
                assert.isNumber( new PennyParser('432').number );
            });
        })

        // '213p' => 213
        describe('When you give a number string + lowercase p' , ( ) => {
            it('should return a number', () => {
                let pennyParse = new PennyParser('213p');
                assert.equal( pennyParse.number, 213 );
            });
        })

        //'£16.23p' => 1623
        describe('When you give Sterling + number string + lowercase p ' , ( ) => {
            it('should return a number', () => {
                let pennyParseOne = new PennyParser('£16.23p');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
                assert.equal( pennyParseOne.number, 1623 );
            });
        })

        //'£14' => 1400
        describe('When you give Sterling sign + number string' , ( ) => {
            it('should return a number times 100', () => {
                let pennyParseOne = new PennyParser('£14');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
                assert.equal( pennyParseOne.number, 1400 );
            });
        })

        //'£54.04' => 5404
        describe('When you give Sterling sign + number string with a dot' , ( ) => {
            it('should return a number number 100', () => {
                let pennyParseOne = new PennyParser('£54.04');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
                assert.equal( pennyParseOne.number, 5404 );
            });
        })


        //'£23.333333' => 2333
        describe('When you give Sterling sign + number string with a dot and more than 2 decimals' , ( ) => {
            it('should return a number times 100', () => {
                let pennyParseOne = new PennyParser('£23.333333');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
                assert.equal( pennyParseOne.number, 2333);
            });
        })

        //'001.41p' => 141
        describe('When you give number string with a dot and more tha 2 zeroes on the left' , ( ) => {
            it('should return a number times 100', () => {
                let pennyParseOne = new PennyParser('001.41p');
                assert.isNumber( pennyParseOne.number );
                assert.isNotNaN( pennyParseOne.number );
                assert.equal( pennyParseOne.number, 141);
            });
        })

        //'13x' => 'invalid character'
        describe('When you give number string + X' , ( ) => {
            it('should return error "invalid character"', () => {
                let pennyParse = new PennyParser('13x');
                expect( ( ) =>  pennyParse.number ).to.throw(Error, 'invalid character');

            });
        })

        //'£p' => missing values
        describe('When you give just sterling + p' , ( ) => {
            it('should return error "missing values"', () => {
                let pennyParse = new PennyParser('£p');
                expect( ( ) =>  pennyParse.number ).to.throw( Error, 'missing values');
            });
        })
    });
});

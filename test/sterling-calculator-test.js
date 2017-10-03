const assert = require("chai").assert;
const SterlingCalculator = require('../assets/js/sterling-calculator.js');
const PennyParser = require('../assets/js/penny-parser.js');

describe('SterlingCalculator', ( ) => {

    describe('Instantiation', ( ) => {

        it('should be an object', () => {
            const pennyParse = new PennyParser('432');
            const calculator = new SterlingCalculator( pennyParse.number );
            assert.isObject(calculator);
        });
    });

    describe('Output', ( ) => {

        describe('When you give a number', ( ) => {

            it('should return an object' , ( ) => {
                const pennyParse = new PennyParser('432');
                const calculator = new SterlingCalculator( pennyParse.number );
                assert.isObject(calculator.calculate);
            })
        }) ;

        // 123 => { twoPounds: null, onePound: 1, twentyP: 1, tenP: null, fiveP: null, twoP: 1, oneP: 1}
        describe('When parse 123', ( ) => {

            it('should return an object with key twoPounds and value of null' , ( ) => {
                const pennyParse = new PennyParser('123');
                const calculator = new SterlingCalculator( pennyParse.number );
                assert.equal(calculator.calculate['twoPounds'], null );;
            })
        }) ;

        // 123 => { twoPounds: 6, onePound: null, twentyP: 1, tenP: 1, fiveP: null, twoP: 2, oneP: null}
        describe('When parse 1234', ( ) => {

            it('should return an object with key twoPounds and value of 2' , ( ) => {
                const pennyParse = new PennyParser('1234');
                const calculator = new SterlingCalculator( pennyParse.number );
                assert.equal(calculator.calculate['twoPounds'], 6 );;
            })
        }) ;

    });
});

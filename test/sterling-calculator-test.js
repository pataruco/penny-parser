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
                assert.isObject(calculator.calculate);;
            })
        }) ;

    });
});

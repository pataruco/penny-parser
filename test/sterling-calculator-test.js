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

        // 123 => { 200: null, 100: 1, 50: null, 20: 1, 10: null, 5: null, 2: 1, 1: 1}
        describe('When parse 123', ( ) => {

            const pennyParse = new PennyParser('123');
            const calculator = new SterlingCalculator( pennyParse.number );

            it('should return an object with key 200 and value of null' , ( ) => {
                assert.equal(calculator.calculate[200], null );
            })

            it('should return an object with key 100 and value of 1' , ( ) => {
                assert.equal(calculator.calculate[100], 1 );
            })

            it('should return an object with key 50 and value of null' , ( ) => {
                assert.equal(calculator.calculate[50], null );
            })

            it('should return an object with key 20 and value of 1' , ( ) => {
                assert.equal(calculator.calculate[20], 1 );
            })

            it('should return an object with key 10 and value of null ' , ( ) => {
                assert.equal(calculator.calculate[10], null );
            })

            it('should return an object with key 5 and value of null ' , ( ) => {
                assert.equal(calculator.calculate[5], null );
            })

            it('should return an object with key 2 and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate[2], 1 );
            })

            it('should return an object with key 1 and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate[1], 1 );
            })
        }) ;

        // 123 => { 200: 6, 100: null, 50: null, 20: 1, 10: 1, 5: null, 2: 2, 1: null}
        describe('When parse 1234', ( ) => {

            const pennyParse = new PennyParser('1234');
            const calculator = new SterlingCalculator( pennyParse.number );

            it('should return an object with key 200 and value of 2' , ( ) => {
                assert.equal(calculator.calculate[200], 6 );
            })

            it('should return an object with key 100 and value of null' , ( ) => {
                assert.equal(calculator.calculate[100], null );
            })

            it('should return an object with key 50 and value of null' , ( ) => {
                assert.equal(calculator.calculate[50], null );
            })

            it('should return an object with key 20 and value of 1' , ( ) => {
                assert.equal(calculator.calculate[20], 1 );
            })

            it('should return an object with key 10 and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate[10], 1 );
            })

            it('should return an object with key 5 and value of null ' , ( ) => {
                assert.equal(calculator.calculate[5], null );
            });

            it('should return an object with key 2 and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate[2], 2 );
            })

            it('should return an object with key 1 and value of null ' , ( ) => {
                assert.equal(calculator.calculate[1], null );
            })
        }) ;

    });
});

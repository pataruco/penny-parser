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

        // 123 => { twoPounds: null, onePound: 1, fiftyP: null, twentyP: 1, tenP: null, fiveP: null, twoP: 1, oneP: 1}
        describe('When parse 123', ( ) => {

            const pennyParse = new PennyParser('123');
            const calculator = new SterlingCalculator( pennyParse.number );

            it('should return an object with key twoPounds and value of null' , ( ) => {
                assert.equal(calculator.calculate['twoPounds'], null );
            })

            it('should return an object with key onePound and value of 1' , ( ) => {
                assert.equal(calculator.calculate['onePound'], 1 );
            })

            it('should return an object with key fiftyP and value of null' , ( ) => {
                assert.equal(calculator.calculate['fiftyP'], null );
            })

            it('should return an object with key twentyP and value of 1' , ( ) => {
                assert.equal(calculator.calculate['twentyP'], 1 );
            })

            it('should return an object with key tenP and value of null ' , ( ) => {
                assert.equal(calculator.calculate['tenP'], null );
            })

            it('should return an object with key fiveP and value of null ' , ( ) => {
                assert.equal(calculator.calculate['fiveP'], null );
            })

            it('should return an object with key twoP and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate['twoP'], 1 );
            })

            it('should return an object with key oneP and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate['oneP'], 1 );
            })
        }) ;

        // 123 => { twoPounds: 6, onePound: null, fiftyP: null, twentyP: 1, tenP: 1, fiveP: null, twoP: 2, oneP: null}
        describe('When parse 1234', ( ) => {

            const pennyParse = new PennyParser('1234');
            const calculator = new SterlingCalculator( pennyParse.number );

            it('should return an object with key twoPounds and value of 2' , ( ) => {
                assert.equal(calculator.calculate['twoPounds'], 6 );
            })

            it('should return an object with key onePound and value of null' , ( ) => {
                assert.equal(calculator.calculate['onePound'], null );
            })

            it('should return an object with key fiftyP and value of null' , ( ) => {
                assert.equal(calculator.calculate['fiftyP'], null );
            })

            it('should return an object with key twentyP and value of 1' , ( ) => {
                assert.equal(calculator.calculate['twentyP'], 1 );
            })

            it('should return an object with key tenP and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate['tenP'], 1 );
            })

            it('should return an object with key fiveP and value of null ' , ( ) => {
                assert.equal(calculator.calculate['fiveP'], null );
            });

            it('should return an object with key twoP and value of 1 ' , ( ) => {
                assert.equal(calculator.calculate['twoP'], 2 );
            })

            it('should return an object with key oneP and value of null ' , ( ) => {
                assert.equal(calculator.calculate['oneP'], null );
            })
        }) ;

    });
});

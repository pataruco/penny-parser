const PennyParser = require('./penny-parser.js');
const SterlingCalculator = require('./sterling-calculator.js');
const Vue = require('vue');


document.addEventListener("DOMContentLoaded", () =>  {
    const app = new Vue({
        el: '#js-app',
        data: {
            calculateString: '',
            sterling: { }
        },
        methods: {
            onSubmit(  ) {
                let penniesAmount;

                try {
                    penniesAmount = new PennyParser( this.calculateString ).number;
                    console.log( penniesAmount );
                } catch (e) {
                    console.error(error.message);
                } finally {
                    this.sterling = new SterlingCalculator( penniesAmount ).calculate;
                    console.log( this.sterling );
                }
            }
        }
    });// end of Vue
}); // end of document

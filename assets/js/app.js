const PennyParser = require('./penny-parser.js');
const SterlingCalculator = require('./sterling-calculator.js');
const Vue = require('vue');


document.addEventListener("DOMContentLoaded", () =>  {
    const app = new Vue({
        el: '#js-app',
        data: {
            calculateString: '',
            sterling: { },
            total: null
        },
        methods: {
            onSubmit(  ) {
                let penniesAmount;
                try {
                    penniesAmount = new PennyParser( this.calculateString ).number;
                    
                } catch (e) {
                    console.error(e);
                }
                const calculator = new SterlingCalculator( penniesAmount )
                this.sterling = calculator.calculate;
                this.total = calculator.result;
            }
        }
    });// end of Vue
}); // end of document

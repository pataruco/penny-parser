const PennyParser = require('./penny-parser.js');
const SterlingCalculator = require('./sterling-calculator.js');
const Vue = require('vue');

document.addEventListener("DOMContentLoaded", () =>  {
    const app = new Vue({
        el: '#js-app',
        data: {
            calculateString: '',
            sterling: { },
            total: null,
            isFocus: false
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
                this.total = calculator.result.toFixed(2);
            },
            onFocus( ) {
                this.isFocus = true;
                this.total = false;
            },
            onBlur( ) {
                this.isFocus = false;
            }
        }
    });
});

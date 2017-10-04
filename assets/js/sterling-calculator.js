class SterlingCalculator {
    constructor( number ) {
        this.penniesAmmount = number;
        this.calculation = {
            200: null,
            100: null,
            50: null,
            20: null,
            10: null,
            5: null,
            2: null,
            1: null
        }
    }

    get calculate( ){
        const rates = [ 200, 100, 50, 20, 10, 5, 2, 1];
        let amount;
        rates.forEach( ( rate ) => {
            if ( rate === 200 ) {
                amount = this.penniesAmmount;
            }
            this.calculateAll( amount, rate );
            amount = amount % rate;
        });
        return this.calculation;
    }

    calculateAll( amount, rate ) {
        if ( ( amount / rate ) >= 1  ) {
            this.calculation[rate] = parseInt( amount / rate );
        } else {
            this.calculation[rate] = null;
        }
    }

}

module.exports = SterlingCalculator;

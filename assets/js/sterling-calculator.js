class SterlingCalculator {
    constructor( number ) {
        this.penniesAmmount = number;
        this.calculation = {
            twoPounds: null,
            onePound: null,
            twentyP: null,
            tenP: null,
            fiveP: null,
            twoP: null,
            oneP: null
        }
    }

    get calculate( ){
        return this.calculateTwoPounds( )
    }

    calculateTwoPounds( ) {
        if ( ( this.penniesAmmount / 200 ) > 1  ) {
            this.calculation.twoPounds = parseInt( this.penniesAmmount / 200 );
            return this.calculation;
        } else {
            this.calculation.twoPounds = null;
            return this.calculation;

        }
    }
}

module.exports = SterlingCalculator;

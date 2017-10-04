class SterlingCalculator {
    constructor( number ) {
        this.penniesAmmount = number;
        this.calculation = {
            twoPounds: null,
            onePound: null,
            fiftyP: null,
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
        const remainder = this.penniesAmmount % 200;

        if ( ( this.penniesAmmount / 200 ) >= 1  ) {
            this.calculation.twoPounds = parseInt( this.penniesAmmount / 200 );
        } else {
            this.calculation.twoPounds = null;
        }

        return this.calculateOnePound( remainder )
    }

    calculateOnePound( amount ) {
        const remainder = amount % 100;

        if ( ( amount / 100 ) >= 1  ) {
            this.calculation.onePound = parseInt( amount / 100 );
        } else {
            this.calculation.onePound = null;
        }

        return this.calculateFiftyP( remainder );
    }

    calculateFiftyP( amount ) {
        const remainder = amount % 50;

        if ( ( amount / 50 ) >= 1  ) {
            this.calculation.fiftyP = parseInt( amount / 50 );
        } else {
            this.calculation.fiftyP = null;
        }

        return this.calculateTwentyP( remainder );
    }

    calculateTwentyP( amount ) {
        const remainder = amount % 20;

        if ( ( amount / 20 ) >= 1  ) {
            this.calculation.twentyP = parseInt( amount / 20 );
        } else {
            this.calculation.twentyP = null;
        }

        return this.calculateTenP( remainder );
    }

    calculateTenP( amount ) {
        const remainder = amount % 10;

        if ( ( amount / 10 ) >= 1  ) {
            this.calculation.tenP = parseInt( amount / 10 );
        } else {
            this.calculation.tenP = null;
        }
        return this.calculateFiveP( remainder );
    }

    calculateFiveP( amount ) {
        const remainder = amount % 5;

        if ( ( amount / 5 ) >= 1  ) {
            this.calculation.fiveP = parseInt( amount / 5 );
        } else {
            this.calculation.fiveP = null;
        }
        return this.calculateTwoP( remainder );
    }

    calculateTwoP( amount ) {
        const remainder = amount % 2;

        if ( ( amount / 2 ) >= 1  ) {
            this.calculation.twoP = parseInt( amount / 2 );
        } else {
            this.calculation.twoP = null;
        }
        return this.calculateOneP( remainder );
    }

    calculateOneP( amount ) {
        if ( amount  >= 1  ) {
            this.calculation.oneP = amount
        } else {
            this.calculation.oneP = null;
        }
        return this.calculation;
    }
}

module.exports = SterlingCalculator;

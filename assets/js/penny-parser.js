class PennyParser {
    constructor( string ) {
        this.data = string;
    }

    get number( ) {
        const string = this.data;
        if ( string.includes('p') ) {
            return this.convertToNumber( string );
        } else if ( string.includes('.') ) {
            return this.convertToNumber( string );
        } else {
            return parseFloat( this.clearString ( string ) );

        }
    }

    clearString( string ) {
        return string.replace(/p/g, '').replace(/£/,'');

    }

    convertToNumber( string ) {
        const stringNumber = string.replace(/p/g, '').replace(/£/,'');
        return parseFloat( stringNumber ) * 100;
    }
}


module.exports  = PennyParser;

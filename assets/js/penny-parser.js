class PennyParser {
    constructor( string ) {
        this.string = string;
        this.isPIntheLastPosition =  string.lastIndexOf('p') === ( string.length -1 );
    }

    get number( ) {
        if ( this.isPIntheLastPosition ) {
            return this.pConvertToNumber( );
       } else if ( this.string.includes('.') ) {
            return this.convertToNumber(  );
        } else {
            return parseFloat( this.clearString (  ) );
        }
    }

    pConvertToNumber( ) {
         const stringNumber = this.string.replace(/p/g, '');
         return parseFloat( stringNumber );
    }

    clearString(  ) {
        return this.string.replace(/p/g, '').replace(/£/,'');

    }

    convertToNumber(  ) {
        const stringNumber = this.string.replace(/p/g, '').replace(/£/,'');
        return parseFloat( stringNumber ) * 100;
    }
}


module.exports  = PennyParser;

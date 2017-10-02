class PennyParser {
    constructor( string ) {
        this.data = string;
    }

    get number( ) {
        const clearString = this.clearString( );
        return parseInt( clearString );
    }

    clearString( ) {
        const string = this.data;
        return string.replace(/p/g, '');
    }
}


module.exports  = PennyParser;

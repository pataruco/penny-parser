class PennyParser {
    constructor( string ) {
        this.data = string;
    }

    get number( ) {
        const clearString = this.clearString( );
        return parseFloat( clearString );
    }

    clearString( ) {
        const string = this.data;
        return string.replace(/p/g, '').replace(/£/,'');
    }
}


module.exports  = PennyParser;

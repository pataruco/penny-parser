class PennyParser {
     constructor( string ) {
          this.string = string;
          this.isPInTheLastPosition =  string.lastIndexOf('p') === ( string.length -1 );
          this.isSterlingInTheFirstPosition = string.indexOf('£') === 0;
          this.isDotPresent = string.includes('.');
          const areValidCharactersPattern = new RegExp( '^[0-9\.\p\£\]*$' )
          this.areValidCharacters = areValidCharactersPattern.test( string );
     }

     get number( ) {
          if ( this.isSterlingInTheFirstPosition &&  this.isPInTheLastPosition && this.areValidCharacters ) {
               return this.sterlingConvertToNumber( );
          }

          if ( this.isSterlingInTheFirstPosition && this.areValidCharacters ) {
               return this.sterlingConvertToNumber( );
          }

          if ( this.isPInTheLastPosition && this.isDotPresent && this.areValidCharacters ) {
               return this.pDotConvertToNumber( );
          }

          if ( this.isPInTheLastPosition && this.areValidCharacters ) {
               return this.pConvertToNumber( );
          }

          if ( !this.areValidCharacters ) {
              return this.invalidCharacterError( )
          }


          return this.clearString (  );
     }

     sterlingConvertToNumber( ) {
          const stringNumber = this.string.replace(/p/g, '').replace(/£/,'');
          return Math.floor( parseFloat( stringNumber ) * 100 );
     }

     pConvertToNumber( ) {
          const stringNumber = this.string.replace(/p/g, '');
          return parseFloat( stringNumber );
     }

     pDotConvertToNumber( ) {
          const stringNumber = this.string.replace(/p/g, '');
          return parseFloat( stringNumber ) * 100;
     }

     invalidCharacterError( ) {
         return new Error('invalid character');
     }

     clearString(  ) {
          return parseFloat ( this.string.replace(/p/g, '').replace(/£/,'') );
     }
}


module.exports  = PennyParser;

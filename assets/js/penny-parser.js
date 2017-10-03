class PennyParser {
     constructor( string ) {
          this.string = string;
          this.isPInTheLastPosition =  string.lastIndexOf('p') === ( string.length -1 );
          this.isSterlingInTheFirstPosition = string.indexOf('£') === 0;
          this.isDotPresent = string.includes('.');
     }

     get number( ) {
          if ( this.isSterlingInTheFirstPosition &&  this.isPInTheLastPosition) {
               return this.sterlingConvertToNumber( );
          }

          if ( this.isSterlingInTheFirstPosition ) {
               return this.sterlingConvertToNumber( );
          }

          if ( this.isPInTheLastPosition && this.isDotPresent ) {
               return this.pDotConvertToNumber( );
          }

          if ( this.isPInTheLastPosition ) {
               return this.pConvertToNumber( );
          }


          return parseFloat( this.clearString (  ) );
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

     clearString(  ) {
          return this.string.replace(/p/g, '').replace(/£/,'');

     }

     convertToNumber(  ) {
          const stringNumber = this.string.replace(/p/g, '').replace(/£/,'');
          return parseFloat( stringNumber ) * 100;
     }
}


module.exports  = PennyParser;

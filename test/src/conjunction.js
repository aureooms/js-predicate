
var util = require( "util" ) ;

var f = function ( x ) {
	return x < 3 ;
} ;


var g = function ( x ) {
	return x > 1 && x < 4 ;
} ;

var fg = predicate.conjunction( f , g ) ;

var one = function ( x ) {
	deepEqual( fg( x ) , f( x ) &&  g( x ) , util.format("fg( %s ) === f( %s ) && g( %s )" , x , x , x ) ) ;
} ;

test( "conjunction" , function ( ) {

	one( 1 ) ;
	one( 2 ) ;
	one( 3 ) ;
	one( 4 ) ;

} ) ;

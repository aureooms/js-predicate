import test from 'ava';
import * as predicate from '../../src';

import {format} from "util";

var f = function ( x ) {
	return x < 3 ;
} ;


var g = function ( x ) {
	return x > 1 && x < 4 ;
} ;

var fg = predicate.equivalence( f , g ) ;

var one = function ( t, x ) {
	t.deepEqual( fg( x ) , f( x ) ===  g( x ) , format("fg( %s ) === f( %s ) === g( %s )" , x , x , x ) ) ;
} ;

test( "equivalence" , t => {

	one( t, 1 ) ;
	one( t, 2 ) ;
	one( t, 3 ) ;
	one( t, 4 ) ;

} ) ;

# autorequire.js
Copyright (c) 2011 Jed Schmidt

a small module for auto-importing modules in node.js.

## usage

    require( "./autorequire" )
    require.auto( <module-name> )

## background

autorequire.js is for the terminally lazy. it turns boilerplate code like this:

    http = require( 'http' );
    https = require( 'https' );
    url = require( 'url' );
    path = require( 'path' );
    util = require( 'util' );
    crypto = require( 'crypto' );

into this:

    http, https, url, path, util, crypto;

it does this by wrapping your module in a closure, like this:

    !function( http, https, url, path, util, crypto ) {
      
      // your original code here
      
    }.apply( this, [ 'http', 'https', 'url', 'path', 'util', 'crypto' ].map( require ) )


basically, it attempts to load your module repeatedly, adding a new argument to the list every time a `not_defined` error is thrown. once all your symbols are there, it compiles and executes the module.

this module was born from a (fab) brainstorm, and is a prototype not really meant for serious use. that said, if you think it could be useful and would like me to `npm` it, lemme know.
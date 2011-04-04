var fs = require( "fs" )

require.auto = function( name ) {
  var path = require.resolve( name )
    , data = fs.readFileSync( path, "utf8" )
    
  return function autorequire() {
    var args = [].slice.call( arguments )
      , fn = Function.apply( Function, args )
      , ret = [
          "!",
          fn,
          ".apply( this, ",
          JSON.stringify( args.slice( 0, -1 ) ),
          ".map( require ) )"
        ].join( "" )
        
    try { ret = module._compile( ret, path ) }
  
    catch( e ) {
      if ( e.type != "not_defined" ) throw e
  
      args.splice( -1, 0, e.arguments[ 0 ] )
      return autorequire.apply( this, args )
    }
    
    return ret
  }( data )
}
// declare these anywhere in the first tick
assert, repl, url;

assert.equal( assert, require( "assert" ) )

assert.equal(
  url.parse( "http://nodejs.org" ).hostname,
  "nodejs.org"
)

repl.start( "> " )
// using `require` on this file will throw a `not_defined` error
// using `require.auto` on this file will work as expected

// declare these anywhere in the first tick
assert, repl, url;

assert.equal( assert, require( "assert" ) )

assert.equal(
  url.parse( "http://nodejs.org" ).hostname,
  "nodejs.org"
)

repl.start( "> " )
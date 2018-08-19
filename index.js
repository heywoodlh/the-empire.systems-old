var Metalsmith  = require('metalsmith');
var serve = require('metalsmith-serve');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "The Empire",
    description: "Cybersecurity and Systems Administration",
    generator: "Metalsmith",
    url: "http://the-empire.systems"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(serve({
    port: 8080,
    verbose: true
  }))
  .use(markdown())
  .use(permalinks({
    // each linkset defines a match, and any other desired option
    linksets: [{
        match: { collection: 'blogposts' },
        pattern: 'posts/:date:title',
        date: 'YYYY-MM-DD-'
    },{
        match: { collection: 'pages' },
        pattern: 'pages/:title'
    }]
  })) 
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });

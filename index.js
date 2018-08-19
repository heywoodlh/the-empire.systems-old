var Metalsmith  = require('metalsmith');
var serve = require('metalsmith-serve');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var cleanCSS = require('metalsmith-clean-css');
var drafts = require('metalsmith-drafts');
var excerpts = require('metalsmith-excerpts');
var collections = require('metalsmith-collections');

Metalsmith(__dirname)
  .metadata({
    title: "The Empire",
    description: "Cybersecurity and Systems Administration",
    author: 'Spencer Heywood',
    generator: "Metalsmith",
    url: "http://www.metalsmith.io"
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(serve({
    port: 8080,
    verbose: true
  }))
  .use(collections({
    articles: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    }
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
  .use(cleanCSS({
    files: 'src/styles/*.css',
    cleanCSS: {
      rebase: true
    }
  }))
  .use(excerpts())
  .use(drafts())
  .build(function(err, files) {
    if (err) { throw err; }
  });

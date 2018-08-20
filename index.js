var Metalsmith = require('metalsmith');
var serve = require('metalsmith-serve');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var drafts = require('metalsmith-drafts');
var excerpts = require('metalsmith-excerpts');
var collections = require('metalsmith-collections');
var paginate = require('metalsmith-paginate');

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
    verbose: true,
    http_error_files: {
      404: "/404.html"
    }
  }))
  .use(collections({
    all: {
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(paginate({
    perPage: 10,
    path: "page/:num/index.html"
  }))
  .use(excerpts())
  .use(drafts())
  .build(function(err, files) {
    if (err) { throw err; }
  });

var Metalsmith = require('metalsmith'),
    serve = require('metalsmith-serve'),
    markdown = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    layouts = require('metalsmith-layouts'),
    drafts = require('metalsmith-drafts'),
    excerpts = require('metalsmith-excerpts'),
    collections = require('metalsmith-collections'),
    handlebars = require('handlebars'),
    lunr = require('metalsmith-lunr'),
    searchMeta = require('metalsmith-search-meta');

handlebars.registerHelper('moment', require('helper-moment'));

handlebars.registerHelper('each_upto', function(ary, max, options) {
    if(!ary || ary.length == 0)
        return options.inverse(this);

    var result = [ ];
    for(var i = 0; i < max && i < ary.length; ++i)
        result.push(options.fn(ary[i]));
    return result.join('');
});

Metalsmith(__dirname)
  .metadata({
    title: "The Empire",
    description: "Cybersecurity and Systems Administration",
    author: 'Spencer Heywood',
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(serve({
    port: 8080,
    verbose: true,
    http_error_files: {
      404: "/404/index.html"
    }
  }))
  .use(collections({
    all: {
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown())
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    pattern: ["*/*/*html","*/*html","*html"],
    default: 'page.html',
    partials: {
            header: 'partials/header',
            header_post: 'partials/header_post',
            footer: 'partials/footer'
    }
  }))
  .use(excerpts())
  .use(drafts())
  .use(lunr())
  .use(searchMeta(
     {
       path: 'searchMeta.json',
       properties: ['title', 'date', 'author']   
     }))
  .build(function(err, files) {
    if (err) { throw err; }
  });

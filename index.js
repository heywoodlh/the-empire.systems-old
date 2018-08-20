var Metalsmith = require('metalsmith'),
    serve = require('metalsmith-serve'),
    markdown = require('metalsmith-markdown'),
    layouts = require('metalsmith-layouts'),
    drafts = require('metalsmith-drafts'),
    excerpts = require('metalsmith-excerpts'),
    collections = require('metalsmith-collections'),
    handlebars = require('handlebars');

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
      pattern: 'posts/*.md',
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    pattern: ["*/*/*html","*/*html","*html"],
    default: 'page.html'
  }))
  .use(excerpts())
  .use(drafts())
  .build(function(err, files) {
    if (err) { throw err; }
  });

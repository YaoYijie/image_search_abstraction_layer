var SearchHandler = require(process.cwd() + '/app/servers/searchHandler.server.js');

module.exports = function(app) {
  var searchHandler = new SearchHandler();
  app.get('/api/imagesearch/:queryStr', searchHandler.getImageRes);
}

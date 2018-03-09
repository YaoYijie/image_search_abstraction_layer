var GoogleImages = require('google-images');
var client = new GoogleImages('014952769316766393946:v-4aigv2c1s', 'AIzaSyCsCvq6XkO3KZSbBuE4aNu_BjFMlBqUx_o');
function searchHandler(){
    this.getImageRes = function(req, res) {
      var offset = req.query.offset;
      var queryStr = req.params.queryStr;
      client.search(queryStr).then(function(images) {
        res.json(images);
      });
    }
}

module.exports = searchHandler;

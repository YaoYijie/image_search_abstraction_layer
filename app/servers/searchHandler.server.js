var GoogleImages = require('google-images');
var request = require('request');
var Search = require('bing.search');
var globalTunnel = require('global-tunnel');
globalTunnel.initialize({
  host: '127.0.0.1',
  port: '1080'
});

function searchHandler(){
    this.getImageRes = function(req, res) {
      var client = new GoogleImages('014952769316766393946:v-4aigv2c1s', 'AIzaSyDES1gkHl2f5l2ALu-gVYNhCbnYOikfNdU');
      var offset = req.query.offset;
      var queryStr = req.params.queryStr;
      // console.log(queryStr + ', ' + offset);
      var engineId = '014952769316766393946:v-4aigv2c1s';
      var apiKey = 'AIzaSyDES1gkHl2f5l2ALu-gVYNhCbnYOikfNdU';
      // var urlRaw = `https://www.googleapis.com/customsearch/v1?q=${queryStr}&cx=${engineId}&key=${apiKey}&searchType=image`;
      // var url = encodeURI(urlRaw);
      client.search(queryStr).then(function(images) {
        res.json(images);
      });
      // console.log(url);
      // request(url, function(err, response, body) {
      //   if(err) {
      //     res.send('err: \n' + err);
      //   } else {
      //     // var obj = JSON.parse(body);
      //     console.log(body);
      //     res.send(body);
      //   }
      //
      // })

      // var search = new Search('43f37b04d3f04d67a0f8aa2b7e8e0424');
      // search.images(queryStr, {top: offset}, function(err, result) {
      //   if (err) {
      //     res.send(err);
      //   }else {
      //     res.json(result);
      //   }
      // })
    }
}

//'https://www.googleapis.com/customsearch/v1?q=the ordinary&cx=014952769316766393946:v-4aigv2c1s&key=AIzaSyDES1gkHl2f5l2ALu-gVYNhCbnYOikfNdU&searchType=image'

module.exports = searchHandler;

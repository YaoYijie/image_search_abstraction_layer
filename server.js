var express = require('express'),
  routes = require('./app/route/index.js');
var app = express();

app.use('/servers', express.static(process.cwd() + '/app/servers'));
routes(app);
app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port 3000...');
});

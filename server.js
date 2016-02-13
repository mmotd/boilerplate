var express = require('express');
var server = express();
server.set('port', (process.env.PORT || 8080));
server.use(express.static(__dirname));
server.get('/', function(req, res){
    res.render('index');
});
server.listen(server.get('port'), function (){
    console.log('Server is running');
})
.on('error', function(err) {
    console.log(err);
});
/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server = app.listen(8080, function(){
    console.log('Servidor Online');
});


require('socket.io').listen(server);
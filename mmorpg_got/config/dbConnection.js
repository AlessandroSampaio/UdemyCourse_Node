/* importar o mongodb */
var mongoCliente = require('mongodb').MongoClient;

var connMongoDB = function(){
    var db = new mongoCliente('mongodb://localhost:27017',  { useUnifiedTopology: true } );
    return db;
}


module.exports = function(){
     return connMongoDB;
};
function JogoDAO(connection){
    this._connection = connection();
};

JogoDAO.prototype.gerarParametros = function(usuario){
    this._connection.connect(function(err, client){
        if(err){
            return;
        }
        const db = client.db('got');
        db.collection('jogo').insertOne({
            usuario: usuario,
            moeda:15,
            suditos: 10,
            temor: Math.floor(Math.random() * 1000),
            sabedoria: Math.floor(Math.random() * 1000),
            comercio:Math.floor(Math.random() * 1000),
            magia: Math.floor(Math.random() * 1000)
        });

        client.close();
    });
};

JogoDAO.prototype.iniciaJogo = function(res, usuario, casa){
    this._connection.connect(function(err, client){
        if(err){
            return;
        }
        const db = client.db('got');
        db.collection('jogo').find({usuario: usuario}).toArray(function(err, result){
            res.render('jogo', {img_casa: casa, jogo: result[0]});
            return result;
        });
        client.close();
    });
};

module.exports = function(){
    return JogoDAO;
}
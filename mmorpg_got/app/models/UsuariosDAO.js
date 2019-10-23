function UsuariosDAO(connection){
    this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
    this._connection.connect(function(err, client){
        if(err){
            return;
        }
        const db = client.db('got');
        db.collection('usuarios').insertOne(usuario);

        client.close();
    });
};

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
    this._connection.connect(function(err, client){
        if(err){
            return;
        }
        const db = client.db('got');
        db.collection('usuarios').find(usuario).toArray(function(err, result){
            if(result[0] != undefined){
                req.session.autorizado = true;
                req.session.usuario = result[0].usuario;
                req.session.casa = result[0].casa;
            }
            if(req.session.autorizado){
                res.redirect('jogo');
            }else{
                res.render('Index', {validacao : {}});
            }
        });
        client.close();
    });
};


module.exports = function(){
    return UsuariosDAO;
}
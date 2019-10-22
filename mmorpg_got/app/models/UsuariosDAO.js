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

module.exports = function(){
    return UsuariosDAO;
}
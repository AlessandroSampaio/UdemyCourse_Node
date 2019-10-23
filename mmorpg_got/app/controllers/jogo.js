module.exports.jogo = function(application, req, res){
    if(req.session.autorizado !== true){
        res.send('Usuario precisa fazer login');
        return;
    }

    var connection = application.config.dbConnection;
	var JogoDAO = new application.app.models.JogoDAO(connection);
    
    JogoDAO.iniciaJogo(res, req.session.usuario, req.session.casa);
};

module.exports.sair = function(application, req, res){
    req.session.destroy(function(err){
        res.redirect('');
    });
    
};

module.exports.suditos = function(application, req, res){
    res.render('aldeoes')
};

module.exports.pergaminhos = function(application, req, res){
    res.render('pergaminhos');
};
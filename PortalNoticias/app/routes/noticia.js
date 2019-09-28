module.exports = function(app){
    app.get('/noticia', function(req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDao(connection);
    noticiasModel.getNoticia(function(error, result){
        if(error){
            res.send(error);
        }else{
            res.render("noticias/noticia", {noticia: result});
        }
    });
});
}
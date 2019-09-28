module.exports = function(application){
    application.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    application.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDao(connection);
        noticiasModel.salvarNoticia(noticia,function(error, result){
            if(error){
                res.send(error);
            }else{
                res.redirect('/noticias');
            }
         });
    });
};
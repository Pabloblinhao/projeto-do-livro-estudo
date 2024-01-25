var express = require('express');
var routes = ('./routes');
var load = require('express-load');// express-load é responsavel por mapear diretórios ara carregar e inje-tar módulos dentro de uma variável q
var app = express(); // aqui armazeno na variavel app todas a funcionalidades do framework express

app.set('views', __dirname + '/views'); // primeiro parametro 'views' seria como um identificador (chave), já o segundo parametro __dirname + '/views' , __dirname seria o local de /views (valor). 
app.set('view egine', 'ejs');
app.use(express.static(__dirname + '/public')); // o app.use() monta um middleware  e faz um caminho com etapas de processo que tem acesso a requisição. e fala para eu usar o express.static que é um middleware para receber requisiçoes e respostas, para trabalhar com arquivos estaticos.
//diz ao Express para usar o middleware express.static para lidar com o serviço de arquivos estáticos localizados no diretório 'public'. Isso significa que qualquer solicitação para arquivos estáticos no diretório 'public' será tratada automaticamente por esse middleware.

app.get('/', routes.index); // digamos que '/' recebe a solicitação do cliente, a função é chamada routes.index, esses valores routes e index já representam a resposta(res), imagine que por trás é uma function(req,rs){}, não precisamos associar algo ao req, só o segundo parametro da função entende que é a resposta.
app.get('/usuarios', routes.user.index); 


//
load('models') //Inicia o processo de carregamento dos módulos no diretório 'models', trazendo os dados relacionados aos modelos.
.then('controllers') // Após o carregamento dos modelos, inicia o carregamento dos módulos no diretório 'controllers', indicando que o controller está sendo carregado e que, geralmente, ele se comunica com os modelos.
.into(app); // Injeta ambos, modelos e controllers, no objeto app. Isso significa que os dados e funcionalidades relacionados aos modelos e controllers estão agora disponíveis para a aplicação como um todo, através do objeto app. Este é um passo importante para garantir que os módulos estejam prontos para serem utilizados em outras partes da aplicação, como rotas, middlewares, etc.


app.listen(3000, function(){ // app.listen porta para colocar o meu servidor no ar
  console.log("Ntalk no ar");
});



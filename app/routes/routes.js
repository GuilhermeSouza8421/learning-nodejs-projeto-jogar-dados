module.exports = function(application){
	
	application.get('/', function(req,res){
		res.render('home');
	});

	application.get('/iniciar', function(req, res){
		console.log('routes: /iniciar');
		application.app.controllers.jogo.iniciar(application,req,res);
		//res.send('Esta funcionabilidade não foi implementada.');
	});

	application.get('/lancarDados', function(req, res){
		console.log('routes: /lancarDados');
		res.send('Esta funcionabilidade não foi implementada.');
	});

	application.get('/reiniciar', function(req, res){
		console.log('routes: /reiniciar');
		res.send('Esta funcionabilidade não foi implementada.');
	});

	application.get('/encerrar', function(req, res){
		console.log('routes: /encerrar');
		res.send('Esta funcionabilidade não foi implementada.');
	});
}
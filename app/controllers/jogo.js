var model = require('../models/jogo');
var jogoModel = undefined;

module.exports.iniciar = function (application, req, res) {
	console.log('controller: iniciar');
	console.log('controller: criar instancia de jogo');
	jogoModel = new model.Jogo();
	console.log('controller: atualiza view - novoJogo');
	res.render('novoJogo');
}

module.exports.novoLancamento = function(application, req, res){
	console.log('controller: novoLancamento');
	if (jogoModel){
		console.log('controller: pede para o model fazer novoLancamento');
		var resultado = jogoModel.lancarDados();
		res.render('novoLancamento', {lancamento : resultado} );
	}
}
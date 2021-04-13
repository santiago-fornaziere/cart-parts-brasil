const Modelo = require('./ModelAno')
module.exports = {
	selectAll () {
		return Modelo.findAll()
	},
	inserir (ano) {
		return Modelo.create(ano)
	}
}

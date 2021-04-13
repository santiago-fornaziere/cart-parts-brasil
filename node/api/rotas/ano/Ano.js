const ViewAno = require('./ViewAno')

class Ano {
	constructor ({
		ano_ID, ano_DESCRICAO
	}) {
		this.ano_ID = ano_ID
		this.ano_DESCRICAO = ano_DESCRICAO
	}

	async append () {
		const resultado = await ViewAno.inserir({
			ano_DESCRICAO : this.ano_DESCRICAO
		})
		this.ano_ID = resultado.ano_ID
	}

}

module.exports = Ano

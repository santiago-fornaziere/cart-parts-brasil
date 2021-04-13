const roteador = require('express').Router()
const ViewAno = require('./ViewAno')
const Ano = require('./Ano')

roteador.get('/', async (requisicao, resposta) => {
	const resultados = await ViewAno.selectAll()
	resposta.send(
		JSON.stringify(resultados)
	)
})

roteador.post('/', async (requisicao, resposta) => {
	const dadosRecebidos = requisicao.body
	const ano = new Ano(dadosRecebidos)
	await ano.append()
	resposta.send(
		JSON.stringify(ano)
	)

})

module.exports = roteador

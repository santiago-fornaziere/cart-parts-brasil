const Sequelize = require('sequelize')
const instancia = require('../../db')

const colunas = {
	ano_ID : {
		type: Sequelize.INTEGER,
		allowNull: true,
		primaryKey: true
	},
	ano_DESCRICAO : {
		type : Sequelize.STRING,
		allowNull: false
	}
}
const opcoes = {
	freezeTableName: true,
	tableName : 'ano',
	timestamps : false
}

module.exports = instancia. define('ano', colunas, opcoes)

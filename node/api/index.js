const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('config')

app.use(bodyParser.json())

const roteador = require('./rotas/ano')
app.use('/api/ano', roteador)

app.listen(config.get('api.porta'), () => console.log('Api rondando na porta 3000...'))

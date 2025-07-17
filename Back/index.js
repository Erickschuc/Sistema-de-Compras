require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const hostname = 'localhost'
const PORT = process.env.PORT

const CompraController = require('./Controller/compra.controller')
const ProdutoController = require('./Controller/produto.controller')
const UsuarioController = require('./Controller/Usuario.controller')
const conn = require('./db/conn')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/compra', CompraController.cadastrar)
app.get('/Compra', CompraController.listar)
app.delete('/Compra/:id', CompraController.apagar)
app.put('/Compra/:id', CompraController.atualizar)

app.post('/Usuario', UsuarioController.cadastrar)
app.get('/Usuario', UsuarioController.listar)
app.delete('/Usuario/:id', UsuarioController.apagar)
app.put('/Usuario/:id', UsuarioController.atualizar)


app.post('/Produto', ProdutoController.cadastrar)
app.get('/Produto', ProdutoController.listar)
app.delete('/Produto/:id', ProdutoController.apagar)
app.put('/Produto/:id', ProdutoController.atualizar)



app.get('/', (req,res)=>{
    res.status(200).json({message: "Aplicação rodando!"})
})

conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Não foi possível conectar com o banco de dados!',err)
})

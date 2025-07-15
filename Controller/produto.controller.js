const Produto = require('../model/Produto')
const cadastrar = async (req, res) => {
    const valores = req.body
    try {
        const dados = await Produto.create(valores)
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao cadastrar os dados!', err)
        res.status(500).json({ message: 'Erro ao cadastrar os dados!' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Produto.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao listar os dados!', err)
        res.status(500).json({ message: 'Erro ao listar os dados!' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const valor = await Produto.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor === null) {
            console.log('O código do produto não existe!')
            res.status(404).json({ message: 'O código do produto não existe!' })
        } else {
            await Produto.destroy({ where: { id: id } })
            console.log('Dados excluídos com sucesso!')
            res.status(200).json({ message: 'Dados excluídos com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível apagar o Produto', err)
        res.status(500).json({ mesage: 'Não foi possível apagar o Produto' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    console.log(id)
    console.log(valores)
    try {
        const valor = await Produto.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor) {
            await Produto.update(valores, { where: { id: id } })
            const dados = await Produto.findByPk(id)
            console.log('Dados atualizados com sucesso!')
            res.status(200).json(dados)
        } else {
            console.log('O código do produto não existe!')
            res.status(404).json({ message: 'O código do produto não existe!' })
        }
    } catch (err) {
        console.error('Não foi possível atualizar o produto', err)
        res.status(500).json({ mesage: 'Não foi possível atualizar o produto' })
    }

}

const consultarId = async (req, res) => {
    const Id = req.params.id

    try {
        const Produto = await Produto.findByPk(Id)

        if (Produto) {
            res.status(200).json(Produto)
        } else {
            res.status(404).json({ message: "Produto com o ID " + Id + " não encontrada." })
        }
    } catch (err) {
        console.error('Erro ao buscar o Produto!', err)
        res.status(500).json({ message: "Erro interno ao processar a sua solicitação." })
    }
}

module.exports = { cadastrar, listar, apagar, atualizar,consultarId }


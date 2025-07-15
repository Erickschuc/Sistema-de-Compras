const Usuario = require('../model/Usuario')
const cadastrar = async (req, res) => {
    const valores = req.body
    try {
        const dados = await Usuario.create(valores)
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao cadastrar os dados do usuario!', err)
        res.status(500).json({ message: 'Erro ao cadastrar os dados do usuario!' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao listar os dados do usuario!', err)
        res.status(500).json({ message: 'Erro ao listar os dados do usuario!' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const valor = await usuario.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor === null) {
            console.log('O código do usuario não existe!')
            res.status(404).json({ message: 'O código do usuario não existe!' })
        } else {
            await Usuario.destroy({ where: { id: id } })
            console.log('Dados excluídos com sucesso!')
            res.status(200).json({ message: 'Dados excluídos com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível apagar os dados', err)
        res.status(500).json({ mesage: 'Não foi possível apagar o usuario' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    console.log(id)
    console.log(valores)
    try {
        const valor = await Usuario.findByPk(id)
        console.log('O valor do ID: ', valor)
        if (valor) {
            Usuario.update(valores, { where: { id: id } })
            const dados = await Usuario.findByPk(id)
            console.log('Dados atualizados com sucesso!')
            res.status(200).json(dados)
        } else {
            console.log('O código do usuario não existe!')
            res.status(404).json({ message: 'O código do usuario não existe!' })
        }
    } catch (err) {
        console.error('Não foi possível atualizar o usuario', err)
        res.status(500).json({ mesage: 'Não foi possível atualizar o usuario' })
    }
}

const consultarId = async (req, res) => {
    const Id = req.params.id

    try {
        const Usuario = await Usuario.findByPk(Id)

        if (Usuario) {
            res.status(200).json(Usuario)
        } else {
            res.status(404).json({ message: "Compra com o ID " + Id + " não encontrada." })
        }
    } catch (err) {
        console.error('Erro ao buscar a compra!', err)
        res.status(500).json({ message: "Erro interno ao processar a sua solicitação." })
    }
}

module.exports = { cadastrar, listar, apagar, atualizar,consultarId }

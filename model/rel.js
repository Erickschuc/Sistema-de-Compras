const Fabricante = require('./Fabricante')
const Entrega = require('./usuario')
const Produto = require('./Produto')

Fabricante.hasMany(Produto,{
    foreignKey: 'fabricante_id',
    as: 'produtosFab',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Fabricante,{
    foreignKey: 'fabricante_id',
    as: 'fabricanteProd',
    allowNull: false
})

Entrega.hasMany(Produto,{
    foreignKey: 'entrega_id',
    as: 'produtosEnt',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Entrega,{
    foreignKey: 'entrega_id',
    as: 'entregaProd',
    allowNull: false
})

module.exports = { Fabricante, Produto, Entrega }
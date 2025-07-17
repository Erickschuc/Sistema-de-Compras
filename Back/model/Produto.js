const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('Produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    percentual_desconto: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'produtos',
    timestamps: false
})

module.exports = Produto


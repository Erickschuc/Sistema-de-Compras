const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Compra = db.define('Compra', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'id'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data_compra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    desconto: {
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    },
    preco_final: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    forma_pagamento: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status_compra: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    tableName: 'compras',
    timestamps: false
})

module.exports = Compra
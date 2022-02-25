// Import des modules
const { DataTypes } = require('sequelize')
const DB = require('../db.config')

// Définition du modele User
const User = DB.define('User', {
    id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    nom:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    prenom:{
        type: DataTypes.STRING(100),
        defaultValue: '',
        allowNull: false
    },
    pseudo:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    email:{
        type: DataTypes.STRING,
        validate:{
            isEmail: true        // validation de données
        }
    },
    password:{
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i    // contrainte
    }
}, { paranoid: true })           // softDelete

// Synchronisation du modèle
//User.sync()
//User.sync({force: true})
//User.sync({alter: true})

module.exports = User
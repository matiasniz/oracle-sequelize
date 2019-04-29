const Sequelize = require('sequelize')
const { db } = require('../services/database');

const Audiencia = db.define('Audiencia', { 
    // attributes
    RIP: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    RUC: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    PARTICIPANTE1: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    PARTICIPANTE2: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
 }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,
  
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    underscored: true,
  
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
  
    // define the table's name
    tableName: 'AUDIENCIAS'
  })


module.exports = Audiencia
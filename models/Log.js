const Sequelize = require('sequelize')
const { db } = require('../services/database');

const Log = db.define('Log', { 
    // attributes
    ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    RIP: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    BOTON: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    FECHA: {
        type: Sequelize.DATE,
        // allowNull: false
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
    tableName: 'LOGS'
  })


module.exports = Log
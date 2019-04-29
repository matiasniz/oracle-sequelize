const Sequelize = require('sequelize')
const { db } = require('../services/database');

const Employee = db.define('Employee', { 
    // attributes
    EMPLOYEE_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    FIRST_NAME: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    LAST_NAME: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    EMAIL: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    PHONE_NUMBER: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    HIRE_DATE: {
        type: Sequelize.DATE
        // allowNull defaults to true
    },
    JOB_ID: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    },
    SALARY: {
        type: Sequelize.FLOAT
        // allowNull defaults to true
    },
    COMMISSION_PCT: {
        type: Sequelize.FLOAT
        // allowNull defaults to true
    },
    MANAGER_ID: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    },
    DEPARTMENT_ID: {
        type: Sequelize.INTEGER
        // allowNull defaults to true
    },
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
    tableName: 'EMPLOYEES'
  })


module.exports = Employee
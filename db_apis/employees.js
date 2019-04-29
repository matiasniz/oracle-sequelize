const oracledb = require('oracledb');
const Employee = require('../models/Employee');

async function find(context) {
  if (context.id) {
    return Employee.findAll({where: {'EMPLOYEE_ID': context.id} });
  } 
  return Employee.findAll();
}
 
module.exports.find = find;


async function create(emp) {
  const employee = Object.assign({}, emp);
 
  employee.employee_id = {
    dir: oracledb.BIND_OUT,
    type: oracledb.NUMBER
  }
 
  const result = await database.simpleExecute(createSql, employee);
 
  employee.employee_id = result.outBinds.employee_id[0];
 
  return employee;
}
 
module.exports.create = create;


async function update(emp) {
  const employee = Object.assign({}, emp);
  const result = await database.simpleExecute(updateSql, employee);
 
  if (result.rowsAffected && result.rowsAffected === 1) {
    return employee;
  } else {
    return null;
  }
}
 
module.exports.update = update;


async function del(id) {
  const binds = {
    employee_id: id,
    rowcount: {
      dir: oracledb.BIND_OUT,
      type: oracledb.NUMBER
    }
  }
  const result = await database.simpleExecute(deleteSql, binds);
 
  return result.outBinds.rowcount === 1;
}
 
module.exports.delete = del;
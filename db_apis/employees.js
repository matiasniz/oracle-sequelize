const Employee = require('../models/Employee');
const { db } = require('./../services/database');

async function find(context) {
  if (context.id) {
    return Employee.findAll({where: {EMPLOYEE_ID: context.id} });
  } 
  return Employee.findAll();
}
 
module.exports.find = find;


async function create(emp) {
  return Employee
  .create(emp)
  .then((em) => Employee.findOrCreate( { where: {EMPLOYEE_ID: em.EMPLOYEE_ID} } ))
  .then(([employee, created]) => {
    console.log(employee.get({
      plain: true
    }))
    return employee

  })
}
 
module.exports.create = create;


async function update(emp) {
  return Employee.find({ where: { EMPLOYEE_ID: emp.EMPLOYEE_ID } })
  .then(function (employee) {
    // Check if record exists in db
    if (employee) {
      employee.update({
        ...emp
      })
      return employee
    }
  })
}
 
module.exports.update = update;


async function del(id) {
  const resultado = await db.query("DELETE from EMPLOYEES where EMPLOYEE_ID=" + id).then( res => res)
  return resultado
}
 
module.exports.delete = del;
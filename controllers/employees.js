const employees = require('../db_apis/employees.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await employees.find(context);
 
    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;


function getEmployeeFromRec(req) {

  const employee = {
    EMPLOYEE_ID: req.body.EMPLOYEE_ID,
    FIRST_NAME: req.body.first_name,
    LAST_NAME: req.body.last_name,
    EMAIL: req.body.email,
    PHONE_NUMBER: req.body.phone_number,
    HIRE_DATE: new Date(req.body.hire_date),
    JOB_ID: req.body.job_id,
    SALARY: req.body.salary,
    COMMISSION_PCT: req.body.commission_pct,
    MANAGER_ID: req.body.manager_id,
    DEPARTMENT_ID: req.body.department_id
  };
 
  return employee;
}
 
async function post(req, res, next) {
  try {
    let employee = getEmployeeFromRec(req);
 
    employee = await employees.create(employee);
 
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;


async function put(req, res, next) {
  try {
    let employee = getEmployeeFromRec(req);
 
    // employee.EMPLOYEE_ID = parseInt(req.params.id, 10);
    
    employee = await employees.update(employee);
 
    if (employee !== null) {
      res.status(200).json(employee);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.put = put;

async function del(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
 
    const success = await employees.delete(id);

    if (success[1].rowsAffected > 0) {
      res.status(200).end("ok");
    } else {
      res.status(404).end("failure");
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.delete = del;
const Audiencia = require('../models/Audiencia');

async function find(context) {
  if (context.id) {
    return Audiencia.findAll({where: { RIP: context.id} });
  } 
  return Audiencia.findAll();
}
 
module.exports.find = find;
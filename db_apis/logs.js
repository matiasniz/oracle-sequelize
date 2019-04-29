const Log = require('../models/Log');
const { db } = require('./../services/database');

async function find(context) {
  if (context.id) {
    return Log.findAll({
      where: {RIP: context.id},
      order: [
        ['ID', 'ASC'],
      ] 
    });
  } 
  return Log.findAll({
    order: [
      ['ID', 'ASC'],
    ]
  });
}
 
module.exports.find = find;


async function create(a) {
  return Log
  .create(a)
  .then(() => a
      
     //Log.findOrCreate( { where: {ID: au.ID} } )

  )
  // .then(([Log, created]) => {
  //   console.log(Log.get({
  //     plain: true
  //   }))
  //   return Log

  // })
  //debo buscar el id auto generado
}
 
module.exports.create = create;


async function update(a) {
  return Log.find({ where: { ID: a.ID } })
  .then(function (Log) {
    // Check if record exists in db
    if (Log) {
        Log.update({
        ...a
      })
      return Log
    }
  })
}
 
module.exports.update = update;


async function del(id) {
  const resultado = await db.query("DELETE from LOGS where id=" + id).then( res => res)
  return resultado
}
 
module.exports.delete = del;
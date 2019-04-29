const Audio = require('../models/Audio');
const { db } = require('./../services/database');

async function find(context) {
  if (context.id) {
    return Audio.findAll({
      where: {RIP: context.id},
      order: [
        ['ID', 'ASC'],
      ] 
    });
  } 
  return Audio.findAll({
    order: [
      ['ID', 'ASC'],
    ]
  });
}
 
module.exports.find = find;


async function create(a) {
  return Audio
  .create(a)
  .then(() => a
      
     //Audio.findOrCreate( { where: {ID: au.ID} } )

  )
  // .then(([audio, created]) => {
  //   console.log(audio.get({
  //     plain: true
  //   }))
  //   return audio

  // })
  //debo buscar el id auto generado
}
 
module.exports.create = create;


async function update(a) {
  return Audio.find({ where: { ID: a.ID } })
  .then(function (audio) {
    // Check if record exists in db
    if (audio) {
        audio.update({
        ...a
      })
      return audio
    }
  })
}
 
module.exports.update = update;


async function del(id) {
  const resultado = await db.query("DELETE from AUDIOS where id=" + id).then( res => res)
  return resultado
}
 
module.exports.delete = del;
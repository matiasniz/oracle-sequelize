const audios = require('../db_apis/audios');
const request = require('request');

var parseString = require('xml2js').parseString;


const base_api = "http://api.timezonedb.com/v2.1/"
const time_zone= "get-time-zone"
const key = "?key=IPZYXZ4V0XTA"
const parametros = "&format=xml&by=zone&zone=America/Santiago"

const url_api = base_api + time_zone + key + parametros

async function get(req, res, next) {
  try {
    const context = {};
 
    context.id = parseInt(req.params.id, 10);
 
    const rows = await audios.find(context);
 
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;

function getAudioFromReq(req) {

  const audio = {
    ID: req.body.id,
    RIP: req.body.rip,
    TRACK: req.body.track
  };
 
  return audio;
}

 
async function post(req, res, next) {
  try {
    let audio = getAudioFromReq(req);
 
    //"http://worldtimeapi.org/api/timezone/America/Santiago"
   return await request(url_api, async function(error, response, body)
    {
      return parseString(body, async function (err, result) {
        // console.log(result.result.formatted[0])
        audio.FECHA = result.result.formatted[0]    
        audio = await audios.create(audio);    
        res.status(201).json(audio);
     });
      
    });  
   
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;


async function put(req, res, next) {
  try {
    let audio = getAudioFromReq(req);
 
    // audio.audio_ID = parseInt(req.params.id, 10);
    
    audio = await audios.update(audio);
 
    if (audio !== null) {
      res.status(200).json(audio);
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
 
    const success = await audios.delete(id);

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
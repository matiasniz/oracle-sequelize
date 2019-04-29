const logs = require('../db_apis/logs');
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
 
    const rows = await logs.find(context);
 
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;

function getLogFromReq(req) {

  const log = {
    ID: req.body.id,
    RIP: req.body.rip,
    BOTON: req.body.boton
  };
 
  return log;
}

 
async function post(req, res, next) {
  try {
    let log = getLogFromReq(req);
 
    //"http://worldtimeapi.org/api/timezone/America/Santiago"
   return await request(url_api, async function(error, response, body)
    {
      return parseString(body, async function (err, result) {
        // console.log(result.result.formatted[0])
        log.FECHA = result.result.formatted[0]    
        log = await logs.create(log);    
        res.status(201).json(log);
     });
      
    });  
   
  } catch (err) {
    next(err);
  }
}
 
module.exports.post = post;


async function put(req, res, next) {
  try {
    let log = getLogFromReq(req);
 
    // log.log_ID = parseInt(req.params.id, 10);
    
    log = await logs.update(log);
 
    if (log !== null) {
      res.status(200).json(log);
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
 
    const success = await logs.delete(id);

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
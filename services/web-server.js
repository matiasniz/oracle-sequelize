const http = require('http');
const express = require('express');
const webServerConfig = require('../config/web-server.js');
const morgan = require('morgan');
const router = require('./router.js');

let httpServer;

async function initialize() {

  return new Promise((resolve, reject) => {
    const app = express();

    httpServer = http.createServer(app);
    
    app.use(morgan('combined'));
    app.use(express.json({
      reviver: reviveJson
    }));
    app.use('/api', router);
    
    app.get('/', async (req, res) => {
        res.send(`Bienvenido al sistema de audio`);
    });
 
    httpServer.listen(webServerConfig.port)
      .on('listening', () => {
        console.log(`Web server listening on localhost:${webServerConfig.port}`);
 
        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}

function close() {
    return new Promise((resolve, reject) => {
      httpServer.close((err) => {
        if (err) {
          reject(err);
          return;
        }
   
        resolve();
      });
    });
}

const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
 
function reviveJson(key, value) {
    // revive ISO 8601 date strings to instances of Date
    if (typeof value === 'string' && iso8601RegExp.test(value)) {
      return new Date(value);
    } else {
      return value;
    }
}
   
module.exports.close = close;
 
module.exports.initialize = initialize;
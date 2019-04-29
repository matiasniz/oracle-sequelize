require('dotenv').config();
const Audio = require('./models/Audio');
const Log = require('./models/Log');


function migrar(){
// Note: using `force: true` will drop the table if it already exists
  Audio.sync({ force: true }).then(() => {
    console.log("table audio is created")
  });
  Log.sync({ force: true }).then(() => {
    console.log("table log is created")
  });
}

migrar();

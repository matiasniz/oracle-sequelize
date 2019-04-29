const express = require('express');
const router = new express.Router();
const employees = require('../controllers/employees.js');
const audiencias = require('../controllers/audiencias.js');
const audios = require('../controllers/audios.js');
const logs = require('../controllers/logs.js');
 
router.route('/employees/:id?')
  .get(employees.get)
  .post(employees.post)
  .put(employees.put)
  .delete(employees.delete);
 
router.route('/audiencias/:id?')
  .get(audiencias.get);

router.route('/audios/:id?')
  .get(audios.get)
  .post(audios.post)
  .put(audios.put)
  .delete(audios.delete);

router.route('/logs/:id?')
  .get(logs.get)
  .post(logs.post)
  .put(logs.put)
  .delete(logs.delete);

  
module.exports = router;
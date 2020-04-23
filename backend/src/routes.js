const { Router }  = require('express');

const patientController = require ('./controllers/patientsController');
const medicsController = require ('./controllers/medicsController');
const measurementsController = require ('./controllers/measurementsController');

const routes = Router();

routes.get('/userspatients', patientController.index);
routes.post('/userspatients', patientController.store);
  
routes.get('/usersmedics', medicsController.index);
routes.post('/usersmedics', medicsController.store);

routes.get('/measurements', measurementsController.indexAll);
routes.post('/measurements', measurementsController.store);
routes.delete('/measurements/:id', measurementsController.delete);

module.exports = routes;
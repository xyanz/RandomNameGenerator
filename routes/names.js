const express = require('express');
const controller = require('../controllers/namesController');
const views = require('../controllers/viewController');
const namesRouter = express.Router();



// namesRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);
// namesRouter.get('/new', views.showAddForm);

// namesRouter.route('/:id')
//   .get(controller.getOne, views.showOne, views.show404)
//   .put(controller.update, views.handleUpdate, views.show406)
//   .delete(controller.destroy, views.handleDelete, views.show404);
//namesRouter.get('/', namesRouter.index, views.)


// On post method, find matching values from DB, render showpage and display
namesRouter.route('/')
  .get(controller.index, views.showNames, views.show404)
  .post(controller.create, views.handleCreate, views.show406);


module.exports = namesRouter;

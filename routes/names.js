const express = require('express');
const controller = require('../controllers/namesController');
const views = require('../controllers/viewController');
const namesRouter = express.Router();




namesRouter.get('/:id/edit', controller.getOne, views.showEditNameForm, views.show404);
namesRouter.get('/new', views.showAddNameForm);

namesRouter.route('/:id')
  .get(controller.getOne, views.showOneName, views.show404)
  .put(controller.update, views.handleUpdateName, views.show406)
  .delete(controller.destroy, views.handleDeleteName, views.show404);



namesRouter.route('/')
  .get(controller.index, views.showNames, views.show404)
  .post(controller.save, views.handleCreateName,  views.show406);

// On post method, find matching values from DB, render showpage and display
namesRouter.route('/generate')
  .post(controller.create, views.handleCreate,  views.show406);

module.exports = namesRouter;

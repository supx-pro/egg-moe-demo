'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list-test', controller.view.list);
  router.get('/create-test', controller.view.create);
  router.get('/edit-test', controller.view.edit);
  router.get('/view-test', controller.view.index);
  router.get('/delete-test', controller.view.delete);
};

import express from 'express';
import homeController from '../controllers/homeController';

const router = express.Router();

const initWebRoutes = (app) => {
  router.get('/', homeController.getHomePage);
  router.get('/about', homeController.getAboutPage);
  router.get('/crud', homeController.getCRUD);
  router.post('/post-crud', homeController.postCRUD);
  router.get('/get-crud', homeController.displayGetCrud);
  router.get('/edit-crud', homeController.getUserById);
  router.post('/put-crud', homeController.putCRUD);
  router.get('/delete-crud', homeController.deleteUserById);
  return app.use('/', router);
};

module.exports = initWebRoutes;

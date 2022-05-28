import express from 'express';
import multer from 'multer';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';

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

  // api
  router.post('/api/login', userController.handleLogin);
  return app.use('/', router);
};

module.exports = initWebRoutes;

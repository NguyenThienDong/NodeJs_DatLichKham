import express from "express";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", (req, res) => res.send("Hello world"));
  return app.use("/", router);
};

module.exports = initWebRoutes;
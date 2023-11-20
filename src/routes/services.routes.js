const { Router } = require("express");

const ServicesController = require("../controllers/ServicesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const servicesController =  new ServicesController();

const servicesRoutes = Router();

servicesRoutes.post("/", ensureAuthenticated, servicesController.create);
servicesRoutes.put("/:id", ensureAuthenticated, servicesController.update);
servicesRoutes.delete("/:id_service", ensureAuthenticated, servicesController.delete);
servicesRoutes.get("/", ensureAuthenticated, servicesController.show);


module.exports = servicesRoutes;
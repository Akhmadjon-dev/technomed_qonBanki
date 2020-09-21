const express = require("express");
const router = express.Router();
const controllers = require("../controllers/appPersons");

/* GET home page. */
router.get("/", controllers.fetchAllAppPersons);
router.post("/", controllers.createAppPerson);
router.get("/:id", controllers.fetchAppPersonById);
router.post("/:id/edit", controllers.updateAppPersonById);
router.get("/:id/delete", controllers.deleteAppPersonById);

module.exports = router;

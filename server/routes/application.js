const express = require("express");
const router = express.Router();
const controllers = require("../controllers/applications");

/* GET home page. */
router.get("/", controllers.fetchAllApplications);
router.post("/", controllers.createApplication);
router.get("/:id", controllers.fetchApplicationById);
router.post("/:id/edit", controllers.updateApplicationById);
router.get("/:id/delete", controllers.deleteApplicationById);

module.exports = router;

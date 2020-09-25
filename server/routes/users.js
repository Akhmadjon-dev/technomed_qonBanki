const express = require("express");
const router = express.Router();
const controllers = require("../controllers/users");

/* GET home page. */
router.get("/", controllers.fetchAllUsers);
router.post("/", controllers.createUser);
router.get("/:id", controllers.fetchUserById);
router.post("/:id/edit", controllers.updateUserById);
router.get("/:id/delete", controllers.deleteUserById);
router.post("/:id/change-auth", controllers.changeUserAuth);

module.exports = router;

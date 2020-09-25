const express = require("express");
const router = express.Router();
const controllers = require("../controllers/bloods");

/* GET home page. */
router.get("/", controllers.fetchAllBloods);
router.post("/", controllers.createNewBloods);
router.get("/delete-all", controllers.deleteAllBloods);
router.get("/:id", controllers.fetchBloodsById);
router.post("/:id/edit", controllers.updateBloodsById);
router.get("/:id/delete", controllers.deleteBloodsById);

module.exports = router;

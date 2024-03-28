const express = require("express");

const veeamController = require("./controllers/veeamController");
const veeamMiddleware = require("./middlewares/veeamMiddleware");

const router = express.Router();

router.get("/api/veeam", veeamController.getAll);
router.post("/api/veeam", veeamMiddleware.validateFieldVeeam, veeamController.createEntry);
router.delete("/api/veeam/:id", veeamController.deleteEntry);
router.put("/api/veeam/:id", veeamMiddleware.validateFieldVeeam, veeamController.updateEntry);

module.exports = router;

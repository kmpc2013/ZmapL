const express = require("express");

const veeamController = require("./controllers/veeamController");
const veeamMiddleware = require("./middlewares/veeamMiddleware");
const fortigateMiddleware = require("./middlewares/fortigateMiddleware");
const fortigateController = require("./controllers/fortigateController")

const router = express.Router();

router.get("/api/veeam", veeamController.getAll);
router.post("/api/veeam", veeamMiddleware.validateFieldVeeam, veeamController.createEntry);
router.delete("/api/veeam/:id", veeamController.deleteEntry);
router.put("/api/veeam/:id", veeamMiddleware.validateFieldVeeam, veeamController.updateEntry);

router.get("/api/fortigate", fortigateController.getAll);
router.post("/api/fortigate", fortigateMiddleware.validateFieldFortigate, fortigateController.createEntry);
router.delete("/api/fortigate/:id", fortigateController.deleteEntry);
router.put("/api/fortigate/:id", fortigateMiddleware.validateFieldFortigate, fortigateController.updateEntry);

module.exports = router;

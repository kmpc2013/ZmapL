const express = require("express");

const veeamController = require("./controllers/veeamController");
const veeamMiddleware = require("./middlewares/veeamMiddleware");
const fortigateMiddleware = require("./middlewares/fortigateMiddleware");
const fortigateController = require("./controllers/fortigateController");
const vmwareMiddleware = require("./middlewares/vmwareMiddleware");
const vmwareController = require("./controllers/vmwareController");

const router = express.Router();

router.get("/api/veeam", veeamController.getAll);
router.post("/api/veeam", veeamMiddleware.validateFieldVeeam, veeamController.createEntry);
router.delete("/api/veeam/:id", veeamController.deleteEntry);
router.put("/api/veeam/:id", veeamMiddleware.validateFieldVeeam, veeamController.updateEntry);

router.get("/api/fortigate", fortigateController.getAll);
router.post("/api/fortigate", fortigateMiddleware.validateFieldFortigate, fortigateController.createEntry);
router.delete("/api/fortigate/:id", fortigateController.deleteEntry);
router.put("/api/fortigate/:id", fortigateMiddleware.validateFieldFortigate, fortigateController.updateEntry);

router.get("/api/vmware", vmwareController.getAll);
router.post("/api/vmware", vmwareMiddleware.validateFieldVmware, vmwareController.createEntry);
router.delete("/api/vmware/:id", vmwareController.deleteEntry);
router.put("/api/vmware/:id", vmwareMiddleware.validateFieldVmware, vmwareController.updateEntry);

module.exports = router;

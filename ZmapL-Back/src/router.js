const express = require("express");

const veeamController = require("./controllers/veeamController");
// const pwikiMiddleware = require("./middlewares/pwikiMiddleware");

const router = express.Router();

router.get("/api/veeam", veeamController.getAll);

module.exports = router;

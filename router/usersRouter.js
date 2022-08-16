//external
const express = require("express");

//internal imports
const { getUsers } = require("../controller/usersController");
const deceoretHtmlResponse = require("../middleware/common/decoretHtmlResponse");
const router = express.Router();

//login page
router.get("/", deceoretHtmlResponse("Users"), getUsers);

module.exports = router;

//external
const express = require("express");

//internal imports
const { getLogin } = require("../controller/loginController");
const deceoretHtmlResponse = require("../middleware/common/decoretHtmlResponse");

const router = express.Router();

//login page
router.get("/", deceoretHtmlResponse("Login"), getLogin);

module.exports = router;

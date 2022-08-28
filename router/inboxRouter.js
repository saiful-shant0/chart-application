//external
const express = require("express");

//internal imports
const { getInbox } = require("../controller/inboxController");
const { checkLogin } = require("../middleware/common/checkLogIn");
const deceoretHtmlResponse = require("../middleware/common/decoretHtmlResponse");
const router = express.Router();

//login page
router.get("/", deceoretHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;

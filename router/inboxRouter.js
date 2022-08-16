//external
const express = require("express");

//internal imports
const { getInbox } = require("../controller/inboxController");
const deceoretHtmlResponse = require("../middleware/common/decoretHtmlResponse");
const router = express.Router();

//login page
router.get("/", deceoretHtmlResponse("Inbox"), getInbox);

module.exports = router;

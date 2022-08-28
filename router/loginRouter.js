//external
const express = require("express");

//internal imports
const { getLogin, login, logout } = require("../controller/loginController");
const { redirectLoggedIn } = require("../middleware/common/checkLogIn");
const deceoretHtmlResponse = require("../middleware/common/decoretHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middleware/login/loginValidators");

const router = express.Router();

const page_title = "Login";

//login page
router.get("/", deceoretHtmlResponse(page_title), redirectLoggedIn, getLogin);

// process login
router.post(
  "/",
  deceoretHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

router.delete("/", logout);

module.exports = router;

//external
const express = require("express");
const { check } = require("express-validator");

//internal imports
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
const deceoretHtmlResponse = require("../middleware/common/decoretHtmlResponse");
const avaterUpload = require("../middleware/users/avaterUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middleware/users/userValidor");
const router = express.Router();

//login page
router.get("/", deceoretHtmlResponse("Users"), getUsers);

router.post(
  "/",
  avaterUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);
// remove user
router.delete("/:id", removeUser);

module.exports = router;

function getLogin(req, res, next) {
  res.render("index", {
    title: "Log in Chat Application",
  });
}
module.exports = {
  getLogin,
};

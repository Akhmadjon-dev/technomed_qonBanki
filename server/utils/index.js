const fs = require("fs");
const path = require("path");

exports.deleteImg = (img) => {
  let dir = `../public${img}`;
  if (process.env.NODE_ENV !== "development") {
    dir = `/var/www/${img}/`;
  }
  const imgPath = path.join(__dirname, dir);
  if (fs.existsSync(imgPath) && img) {
    fs.unlinkSync(imgPath);
  }
};

exports.authHandler = (req, res, next) => {
  const whiteList = [
    "/auth/sign-in",
    "/auth/sign-up",
    "/dashboard",
    "/users",
    "/bloods",
  ];
  console.log(req.session, req.url);

  if (!whiteList.includes(req.url)) {
    const { userId, loggedIn } = req.session;
    if (userId && loggedIn) {
      return next();
    }
    return res.json({
      type: "auth",
      msg: "You need to login/sign up first",
      success: false,
    });
  }
  return next();
};

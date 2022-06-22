const jwt = require("jsonwebtoken");

// kiểm tra token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid!");
      } else {
        req.user = user;
        next();
      }
    });
  }
};

// kiểm tra token của người dùng có hợp lệ
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not alowed to do that");
    }
  });
};

// kiểm tra tài khoản có phải là admin
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      console.log("admin ne", req.user)
      next();
    } else {
      res.status(403).json("you are not alowed to do that");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};

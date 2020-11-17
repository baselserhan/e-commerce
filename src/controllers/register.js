const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const email = req.body;
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  res.json({ hashedpassword: hash });
};

module.exports = register;

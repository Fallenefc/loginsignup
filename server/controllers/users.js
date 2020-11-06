const UserModel = require('../models/users');
const bcrypt = require('bcrypt');

const userSignUp = (req, res) => {
  bcrypt.hash(req.body.password, 10, async (err, hashedPass) => {
    if (err) {
      res.json({
        error: err
      })
    }
    const user = new UserModel({
      username: req.body.username,
      password: hashedPass
    })

    await UserModel.create(user);
    console.log(`Added to database: ${JSON.stringify(user)}`);
    res.send(user);
  })
}

const userLogIn = async (req, res) => {
  const fetchedUser = await UserModel.findOne({username: req.body.username});
  if (!fetchedUser) {
    res.status(403);
    res.send('Login error')
    return;
  }
  const userHashedPassword = fetchedUser.password;
  bcrypt.compare(req.body.password, userHashedPassword, (err, result) => {
    if (err) {
      res.json({
        error: err
      })
    }
    if (result) {
      res.status(200);
      res.send('successful Login');
    }
    else {
      res.status(403);
      res.send('Login error')
    }
  })
}

module.exports = { userSignUp, userLogIn }
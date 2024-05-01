const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.getAllUser = (req, res, next) => {
  User.find()
      .then(users =>res.status(200).json(users))
      .catch(error => res.status(400).json({error}))
}

exports.getUserByid = (req, res, next) => {
  User.findOne({_id:req.params.id})
      .then(user =>res.status(200).json(user))
      .catch(error => res.status(400).json({error}))
}

exports.addUser = (req, res, next) => {
  const user = new User({...req.body})
  user.save()
    .then(() => res.status(200).json('user créé'))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateUser = (req, res, next) => {
  User.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id})
      .then(()=>res.status(200).json('user modifié'))
      .catch(error => res.status(400).json({error}))
};

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json('user supprimé'))
    .catch((error) => res.status(400).json({ error }));
};

exports.authenticate = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        if (response) {
          delete user._doc.password;
          const expireIn = 24 * 60 * 60;
          const token = jwt.sign(
            {
              user: user,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: expireIn,
            }
          );
          res.header("Authorization", "Bearer " + token);
          return res.status(200).json("authenticate success");
        }
        return res.status(403).json("wrong credencials");
      });
    } else {
      return res.status(404).json("User not found");
    }
  } catch (error) {
    return res.status(501).json(error);
  }
};

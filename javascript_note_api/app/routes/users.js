let express = require('express');
let router = express.Router();
const jwt = require('jsonwebtoken');
const withAuth = require('../middlewares/auth');

require('dotenv').config()
const secret = process.env.JWT_TOKEN;

const User = require('../models/user.js');


router.post('/register', async function(req, res) {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save()
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({error: "Error registering new user please try again."});
  }
});

router.post('/login', async function(req, res) {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email })
    if (!user) {
      res.status(401).json({error: 'Incorrect email or password'});
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (!same) {
          res.status(401).json({error: 'Incorrect email or password'});
        } else {
          const token = jwt.sign({email}, secret, { expiresIn: '30d' });
          res.json({user: user, token: token});
        }
      });
    }

  } catch (error) {
    res.status(500).json({error: 'Internal error please try again'});
  }
});

router.put('/', withAuth, async function(req, res) {
  const { name, email } = req.body;
 
  try {
   var user = await User.findOneAndUpdate(
     {_id: req.user._id},
     { $set: { name: name, email: email}},
     { upsert: true, 'new': true }
    )
       res.json(user);
   } catch (error) {
      res.status(401).json({error: error});
   }
 });

 router.put('/password', withAuth, async function(req, res) {
  const { password } = req.body;
 
  try {
    var user = await User.findOne({_id: req.user._id})
     user.password = password
     user.save()
     res.json(user);
   } catch (error) {
     res.status(401).json({error: error});
   }
 });

 router.delete('/', withAuth, async function(req, res) {
  try {
   let user = await User.findOne({_id: req.user._id });
     await user.deleteOne();
     res.json({message: 'OK'}).status(201);
   } catch (error) {
      res.status(500).json({error: error});
   }
 });
 
module.exports = router;

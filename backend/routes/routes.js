// const { request } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/user');
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(req.body.password, saltPassword)

  const signedUpUser = new signUpTemplateCopy({
    email: req.body.email,
    password: securePassword,
    groups: req.body.groups
  })
  signedUpUser.save()
  .then(data => {
    res.json(data)
  })
  .catch(error => {
    res.json(error)
  })
})

module.exports = router;

// function(err) {
//   if (err) {
//     var error = 'Something bad happened, try again!';
//     if(err.code === 11000) {
//       error = 'That email is already taken, try another.';
//     }
//     res.render('register.jade', { error: error });
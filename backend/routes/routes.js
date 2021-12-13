const express = require('express')
const router = express.Router()
const User = require('../models/user');
const bcrypt = require('bcrypt')

//SIGN UP USER
router.post('/signup', async (req, res) => {
  //Generate hash to secure password
  const saltPassword = await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(req.body.password, saltPassword)

  //Create copy of schema template and post to MongoDB
  const signedUpUser = new User({
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

  const token = user._id;
  console.log("token", token);
  res.json({ success: true, email: user.email, token: token });
})

//LOG IN USER
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email});
  if (!user){
    res
      .status(401)
      .json({ success: false, messages: ['user not found: ${email}. ']});
  }
  const match = await bcrypt.compare(password, user.password).catch((err) => {
    next(err);
  });

  if (match) {
    const token = user._id;
    console.log("token", token);
    res.json({ success: true, email: user.email, token: token });
  } else{
    res
      .status(401)
      .json({ success: false, messages: ['passwords did not match']})
  }
})

//CREATE NEW GROUP
router.post('/creategroup', async(req, res, next) => {
  const { userId, newGroup } = req.body;
  console.log("userId", userId);
  console.log("newGroup", newGroup );

  const updatedGroup = User.findOneAndUpdate(
    { _id: userId},
    { $push: {groups: newGroup }},
    { upsert: false},
    function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("SUCCESS");
      }
    }
  );
  console.log("updatedGroup", updatedGroup);
  res.json(updatedGroup);
})

//ADD TO GROUP
router.post('/addtogroup', async(req, res, next) => {
  const { userId, newPlayers, groupId, groupName } = req.body;

  console.log("userId", userId);
  console.log("newPlayers", newPlayers);
  console.log("groupId", groupId)
  console.log("groupName", groupName)

  const currUser = await User.findById(userId);
  let AllGroups = currUser.groups;

  console.log("AllGroups", AllGroups);

  let currGroup = [];

  for (let i = 0; i < AllGroups.length; i++){
    if (i == groupId){
      currGroup = AllGroups[i].players;
    }
  }

  const resultGroup = currGroup.concat(newPlayers);
  AllGroups[groupId].players = resultGroup;
  console.log("AllGroups", resultGroup);
  console.log("AllGroups", AllGroups);

  const updatedGroup = await User.findOneAndUpdate(
    {_id: userId},
    { groups: AllGroups },
    { upsert: false},
    function(err){
      if(err){
        console.log(err);
      }
      else{
        console.log("SUCCESS");
      }
    }
  );

  res.json(updatedGroup);
})


//GET GROUP
router.get('/showgroup/:userId', async(req, res, next) => {
  const userId = req.params.userId;
  console.log("userId", userId);

const getGroups = await User.findOne({ _id: userId })
  .select("groups")
  .catch((err) => {
    next(err);
  })

  console.log("getGroups", getGroups);
  res.json(getGroups);
})

module.exports = router;

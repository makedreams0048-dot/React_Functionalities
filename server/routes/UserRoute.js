
const express = require("express");
const router = express.Router();

const User = require("../models/userModel/User");
//User APi's List


// CREATE
router.post("/", async (req, res) => {
  try {
    const newPerson = await People.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


//Store Api
router.post("/add-user", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    console.log(req.body);

    const newUser = new User({
      name,
      email,
      phone
    });

    await newUser.save();

    res.json("User added successfully");

  } catch (error) {
    res.json(error);
  }

});

//Get User Data Api
router.get("/getData", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

//Delete Api
router.delete("/delete-user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("User deleted");
  } catch (error) {
    res.json(error);
  }
});


//Update Api
router.put("/update-user/:id", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
      phone
    });

    res.json("User updated");

  } catch (error) {
    res.json(error);
  }
});



module.exports = router;
require("dotenv").config();   // load env variables


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error:", err));

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});


//Store Api
app.post("/add-user", async (req, res) => {
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
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});


//Delete Api
app.delete("/delete-user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("User deleted");
  } catch (error) {
    res.json(error);
  }
});


//Update Api
app.put("/update-user/:id", async (req, res) => {
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



// start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});

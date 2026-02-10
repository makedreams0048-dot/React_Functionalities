require("dotenv").config();   // load env variables

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Error:", err));


// Import routes
const userRoutes = require("../server/routes/UserRoute");
app.use("/users",userRoutes);


const customerRoutes = require("../server/routes/CustomerRoute")
app.use("/customer",customerRoutes)

// start server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});

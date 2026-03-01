require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db"); // ✅ Import DB connection

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.get("/test", (req, res) => {
  res.send("Backend working ✅");
});

// Routes
const userRoutes = require("./routes/UserRoute");
app.use("/users", userRoutes);

const customerRoutes = require("./routes/CustomerRoute");
app.use("/customer", customerRoutes);

const peropleRoutes =  require("./routes/PeopleRoute")
app.use("/people",peropleRoutes);

// Start server
app.listen(process.env.PORT || 5001, () => {
  console.log(`Server running on port ${process.env.PORT || 5001}`);
});
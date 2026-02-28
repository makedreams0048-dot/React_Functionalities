const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected ✅");
    console.log("Database:", conn.connection.name);

  } catch (error) {
    console.error("MongoDB Error ❌:", error.message);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectDB;
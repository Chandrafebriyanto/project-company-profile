require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);

// Koneksi ke Database (MongoDB)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database terhubung!"))
  .catch((err) => console.error("❌ Gagal konek database:", err));

// Route Percobaan
app.get("/", (req, res) => {
  res.send("Backend berjalan lancar!");
});

// Jalankan Server
app.listen(PORT, () => {
  app.use("/api/users", userRoute);
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});

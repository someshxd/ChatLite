const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes")

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("API is running");
})

app.use('/api/user', userRoutes)

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`))
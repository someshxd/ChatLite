const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json())

const PORT = process.env.PORT || 4000;

app.use('/api/user', userRoutes)

app.get("/", (req, res) => {
    res.send("API is running");
})

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`))
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;


app.use(express.json());
app.use(cors());

// Connection: 
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.error("*** Database connection Successful! ***"));


const userRouter = require("./router/user-router");
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

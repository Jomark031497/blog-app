const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");

// setup express
const app = express();
const PORT = process.env.PORT || 5000;

// setup mongoose
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected to mongoDB")
);

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// routes
app.use("/blogs", blogRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`listening to port ${PORT}!`));

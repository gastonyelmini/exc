const express = require("express");
const mongoose = require("mongoose");
const app = express();

const misc = require("./routes/api/misc");

require("dotenv").config();

app.use("/api", misc);

const options = { useNewUrlParser: true };

mongoose
  .connect(process.env.MONGODB_URI, options)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo DB conn error ", err));

app.listen(process.env.PORT || 80, () =>
  console.log("listening on port " + process.env.PORT)
);

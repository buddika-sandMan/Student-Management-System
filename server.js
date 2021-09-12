const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotEnv = require("dotenv");
require("dotenv").config();

const app = express();



const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json({limit: '50mb'}));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopologyL: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});


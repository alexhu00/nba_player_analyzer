const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require("cors");

const PORT = 4000;
const router = express.Router();

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected!"));

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);

app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});




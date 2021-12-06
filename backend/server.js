// #!/usr/bin/env node
// const server = require("./app") // load up the web server
// const port = 3000 // the port to listen to for incoming requests
// // call express's listen function to start listening to the port
// const listener = server.listen(port, function () {
//   console.log(`Server running on port: ${port}`)
// })
// // a function to stop listening to the port
// const close = () => {
//   listener.close()
// }
// module.exports = {
//   close: close,
// }

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
let user = require("./models/user.js");
const ATLAS_URI="mongodb+srv://mern:mongodb@cluster0.1wx0v.mongodb.net/users?retryWrites=true&w=majority";
const router = express.Router();
app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/users", {
//   useNewUrlParser: true
// });

mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
  //const x = new user({name:"hi", email:"hi@gmail.com", password: "hi"}).save();
  //console.log(x)
});


app.use("/", router);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});



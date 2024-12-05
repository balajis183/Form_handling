const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const connect = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/FormRegistration ");
    console.log("connected to MongoDB");
  } catch (err) {
    console.log(err.message);
  }
};

// create application /json parser
var jsonParser = bodyParser.json();

//create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//configuration
//configuration views

app.set("views", "./views");

//configure ejs file
app.set("view engine", "ejs");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

app.get("/test", (req, res) => {
  res.send("Test working ");
});

app.post("/submit", urlencodedParser, async (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  //   console.log(bodyParser);
  // const{name,email}= req.body;
  // console.log(name +" "+ email);

  const userDoc = new User({ name, email });
  try {
    await userDoc.save();
    res.send("User saved");
  } catch {
    res.send("Error saving user");
  }
});

// req.body
//  bodyparser

app.get("/register", (req, res) => {
  res.render("Form");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connect();
});

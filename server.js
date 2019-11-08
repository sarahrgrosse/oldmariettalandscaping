const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");


const usersLogin = require("./routes/api/usersLogin");

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//BodyParser Middleware//
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//DB Config//
const db = require("./config/keys").mongoURI;
// const db = require("./models");

//Connect to MongoDB//
mongoose.connect(db, { useNewUrlParser: true }
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

//Passport Middleware Config//
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/usersLogin", usersLogin);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connection Listener//
const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

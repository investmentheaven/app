const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");
const app = express();//end

//database connection query
mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, () => {
  return { useNewUrlParser: true }; 
});//end

// const MongoClient = require('mongodb').MongoClient;
// // const uri = "mongodb+srv://IHdbSudoUser:<password>@cluster0.2cwlx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//setting up cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
///
app.use(passport.initialize());
app.use(passport.session()); //end

//ALL ROUTES
//oauth routes
require("./routes/authRoutes")(app);
//proxy configuration
require("./client/src/setupProxy")(app); //end


//development and production serving of files
const path = require('path');
if( process.env.NODE_ENV === 'production' ) {
	//Express will serve up the index.html file
	//like our main.js file, or main.css file!
	app.use( express.static('client/build') );

	//Express will serve up the index.html file
	//if it doesnt recongnize the route
	app.get( '*', (req, res) => {
			 res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
			});
	}else {
		app.use( express.static('client/build') );

		app.get( '*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
		   });
	}//end

	app.get("/welcome", (req, res) => {
	res.send(`welcome ${process.env.USERNAME}!`);
	//db query
	// new UserComp({
	//   username: process.env.USERNAME,
	//   os: process.env.OS
	// });
	console.log(process.env.OS);
	});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
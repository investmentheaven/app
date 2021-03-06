const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//
const User = mongoose.model("users");

//
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
//

//
//
//google
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //
      try{
        const existingUser = await User.findOne({
        googleId: profile.id,
        username: process.env.USERNAME
        });
      }catch(err){
        alert(err);
      }

      if (existingUser) {
        //we already have a record with the given profile.id
        return done(null, existingUser);
      }
      //we dont have a user record create a new one
      const user = await new User({
        googleId: profile.id,
        username: process.env.USERNAME
      }).save();
      done(null, user);

      console.log(profile.id);
    }
  )
);
// console.log("56passport: ", process.env.USERNAME);
const passport = require("passport");

//exports
module.exports = app => {
  //route Handlers for Google passport
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  //redirecting after successful authentication of user
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/dashboard"); // you can change the redirect to fit your app
    }
  );
  //
  app.get("/api/logout", (req, res) => {
    req.logout();
    // res.send(req.user);
    //A/
    //B/
    res.redirect("/");
  });
  //
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google", { failureRedirect: "/login" }),
  //   function(req, res) {
  //     // Successful authentication, redirect home.
  //     res.redirect("/");
  //   }
  // );
  //
};
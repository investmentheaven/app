const keys = require("./keys");

if (process.env.NODE_ENV === "production") {
  //run prod vairable
  module.exports = require("./prod");
} else {
  //run dev variable /////
  module.exports = require("./dev");
}

// const fs = require("fs");

// var KeysJson, keysInfo;

// keysJson = fs.readFileSync("./config/keysInfo.json");
// keysInfo = JSON.parse(keysJson);

// module.exports = {
//   googleClientID:
//     "628920134445-hmefbn54635l2ebk2kocv0455u65lnl9.apps.googleusercontent.com",
//   googleClientSecret: "yXQnvX9l8vTjoOPZ96Bl9B7L",
//   vat: "e"
// };
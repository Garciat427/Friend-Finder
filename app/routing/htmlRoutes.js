// ===============================================================================
// DEPENDENCIES
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/survey", function(req, res) {
       console.log("Survey");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("*", function(req, res) {
     console.log("Home");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

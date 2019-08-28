// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });
  
  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
     var tempDiff = 50;
     var friend;

     friendData.push(req.body);
     var currUser = friendData[(friendData.length-1)];

     for (var index1 = 0; index1 < friendData.length - 1; index1++){
          var diff = 0;
          var friendComp = friendData[index1];

          console.log (currUser.name + "VS" + friendComp.name);
          for (var index2 = 0; index2 < friendComp.scores.length; index2++){
               //console.log("loop" + index2);
               diff += (Math.abs(friendComp.scores[index2]- currUser.scores[index2]));
          }
          if (tempDiff > diff){
               tempDiff = diff;
               friend = friendComp;
          }
     }
     res.json(friend);
  });

  // ---------------------------------------------------------------------------

  /* app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  }); */
};

var frienddata = require("../data/friends.js");
var path = require("path");

// module.exports = function(app) {
//     app.get("/api/friends", function(req, res) {
//         res.json(frienddata);
//     });
//     app.post("/api/friends", function(req, res) {
//         frienddata.push(req.body);
//     });
// };

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(frienddata);
    });

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var differences = [];
        if (frienddata.length < 1) {
            console.log("Not enough users to proceed with calculation. Please try again.");
        } else {
            compareFriends(frienddata, newUser, differences);
            var lowest = differences[0];
            for (var i = 0; i < differences.length; i++) {
                if (differences[i] < lowest) {
                    lowest = differences[i];
                }
            };
            var bestMatch = differences.indexOf(lowest);
            res.send(frienddata[bestMatch]);
        };
        frienddata.push(newUser);
    });

    function compareFriends(frienddata, newUser, differences) {
        var curUserIndex = 0;
        while (curUserIndex < frienddata.length) {
            var totalDifference = 0;
            for (var i = 0; i < newUser.scores.length; i++) {
                totalDifference += Math.abs(parseInt(frienddata[curUserIndex].scores[i]) - parseInt(newUser.scores[i]))
            }
            differences.push(totalDifference);
            curUserIndex++;

        }
    }
}

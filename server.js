var express = require("express");
// Create our app
var app = express();
const path = require("path");

app.use(express.static("public"));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
})




app.listen(3000, function () {
    console.log("Express server is up");
});


// GLOBAL DEPENDENCIES
// npm install -g webpack
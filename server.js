var express = require("express");
// Create our app
var app = express();
const PATH = require("path");
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
    if(req.headers["x-forwarded-proto"] === "http") {
        next();
    } else {
        res.redirect("http://" + req.hostname + req.url);
    }
});

app.use(express.static("public"));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
})




app.listen(PORT, function () {
    console.log("Express server is up on port " + PORT);
});

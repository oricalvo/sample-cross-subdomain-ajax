const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.get("/hello", function(req, res) {
    res.send("Hello from app");
});

app.listen(3001, function() {
    console.log("App server is running");
});

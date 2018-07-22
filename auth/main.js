const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.get("/auth", function(req, res) {
    res.send({
        id: 1,
        name: "Ori",
    });
});

app.get("/hello", function(req, res) {
    res.send("Hello from auth server");
});

app.listen(3002, function() {
    console.log("Auth server is running");
});

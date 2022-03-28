const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.static(__dirname + "/public/html", {extensions: ['html']}));

app.listen(1111, () => {
    console.log("Server is running at port 1111")
})
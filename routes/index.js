const express = require("express");
const path = require("path");
const app = express();

const users = require("./login");

app.use(
    "/users",
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    users
);


app.use(express.static(path.join(__dirname, "../build")));

module.exports = app;
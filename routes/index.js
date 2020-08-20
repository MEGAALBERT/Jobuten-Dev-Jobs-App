const express = require("express");
const path = require("path");
const app = express();

const users = require("./login");
const auth = require("./auth")

app.use(
    "/users",
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    users
);

app.use(
    "/login",
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    auth
);


app.use(express.static(path.join(__dirname, "../build")));

module.exports = app;
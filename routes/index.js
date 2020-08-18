const express = require("express");
const path = require("path");
const app = express();

const api = require("./login");

app.use(
    "/api",
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    api
);

app.use(express.static(path.join(__dirname, "../build")));

module.exports = app;
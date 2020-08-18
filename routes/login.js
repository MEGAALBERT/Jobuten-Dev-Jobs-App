const express = require("express");

const router = express.Router();

const db = require("../database/knex");

router.get("/", (req, res) => {
    try {
        db.select()
            .from("users")
            .orderBy("id", "asc")
            .then(function (data) {
                res.send(data);
            });
    } catch (err) {
        console.log(err);
    }
});

router.post("/", (req, res) => {
    try {
        db.insert(req.body)
            .returning("*")
            .into("users")
            .then((data) => {
                res.send(data);
            });
    } catch (err) {
        console.log(err);
    }
});

router.patch("/:id", (req, res) => {
    db("users")
        .where({
            id: req.params.id,
        })
        .update(req.body)
        .returning("*")
        .then(function (data) {
            res.send(data);
        });
});

router.delete("/:id", (req, res) => {
    db("users")
        .where({
            id: req.params.id,
        })
        .del()
        .then(function () {
            res.json({
                deleted: true,
            });
        });
});

router.get("/:id", (req, res) => {
    db("users")
        .where({
            id: req.params.id,
        })
        .select()
        .then(function (data) {
            res.send(data);
        });
});

module.exports = router;
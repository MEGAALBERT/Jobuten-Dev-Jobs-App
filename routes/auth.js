const express = require("express");
const router = express.Router();
const db = require("../database/knex");
const bcrypt = require("bcrypt");




// This post request for checking user to allow enter in.

router.post("/", (req, res) => {
    try {
        db("users")
            .where({
                username: req.body.username,
            })
            .first()
            .then(function (user) {
                if (!user) {
                    res.status(401).send("User not found");
                } else {
                    bcrypt.compare(req.body.password, user.password, function (
                        err,
                        result
                    ) {
                        if (result) {
                            res
                                .send({
                                    username: user.username,
                                    email: user.email,
                                    status: true
                                })
                                .status(200);
                        } else {
                            res.status(401).send("Incorrect Password");
                        }
                    });
                }
            });
    } catch (err) {
        console.log(err);
    }
});


module.exports = router;
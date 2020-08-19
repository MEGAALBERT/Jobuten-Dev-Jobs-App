const express = require("express");
const router = express.Router();
const db = require("../database/knex");
const bcrypt = require("bcrypt");

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

// This is add new users to database(table users)

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

//  Now working on new post request

// router.post("/", async (req, res) => {
//     try {

//         const salt = await bcrypt.genSalt();
//         const hashedPassword = await bcrypt.hash(req.body.password, salt)

//         db.insert(req.body)
//             .returning("*")
//             .into("users")
//             .then((data) => {
//                 res.send(data);
//             });
//     } catch (err) {
//         console.log(err);
//     }
// });




// comment for users, patch is not idempotence, put is idempotence.

router.patch("/:id", (req, res) => {
    try {
        db("users")
            .where({
                id: req.params.id,
            })
            .update(req.body)
            .returning("*")
            .then(function (data) {
                res.send(data);
            });
    } catch (err) {
        console.log(err);
    }
});

router.put('/:id', (req, res) => {
    try {
        db('users').where({
            id: req.params.id
        }).update({
            first_name: req.body.first_name || null,
            last_name: req.body.last_name || null,
            email: req.body.email || null,
            username: req.body.username || null,
            password: req.body.password || null,
        }).returning('*').then(function (data) {
            res.send(data)
        })
    } catch (err) {
        console.log(err);
    }
})


router.delete("/:id", (req, res) => {
    try {
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

    } catch (err) {
        console.log(err);
    }

});

router.get("/:id", (req, res) => {
    try {
        db("users")
            .where({
                id: req.params.id,
            })
            .select()
            .then(function (data) {
                res.send(data);
            });

    } catch (err) {
        console.log(err);
    }

});

module.exports = router;
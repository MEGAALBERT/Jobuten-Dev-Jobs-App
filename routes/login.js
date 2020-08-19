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

// router.post("/", (req, res) => {
//     try {
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

// This post request for add new user

router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    };
    db.insert(user)
      .into("users")
      .returning("*")
      .then(function () {
        res.status(201).send();
      });
  } catch {
    res.status(500).send();
  }
});



router.put("/:id", (req, res) => {
  try {
    db("users")
      .where({
        id: req.params.id,
      })
      .update({
        first_name: req.body.first_name || null,
        last_name: req.body.last_name || null,
        email: req.body.email || null,
        username: req.body.username || null,
        password: req.body.password || null,
      })
      .returning("*")
      .then(function (data) {
        res.send(data);
      });
  } catch (err) {
    console.log(err);
  }
});

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
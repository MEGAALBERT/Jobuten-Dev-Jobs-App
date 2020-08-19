const fs = require("fs")
const db = require("../knex");

    (async () => {
        try {
        const users = JSON.parse(fs.readFileSync("./database/seed/sample.json"))
            for (const user of users) {
                const first_name = user.first_name
                const last_name = user.last_name
                const email = user.email 
                const username = user.username
                const password = user.password
                const token = user.token
                //create seed table user
                const usersTable = await db("users").insert({
                    first_name,
                    last_name,
                    email,
                    username,
                    password
           
                })
                //create seed table "auth_token"
                const tokenTable=await db("auth_token").insert({
                  token
           
                })

            }
    } catch (err) {
        console.error("Error inserting records", err);
    }
 })()
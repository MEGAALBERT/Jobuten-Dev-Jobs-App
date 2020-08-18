const fs = require("fs")
const db = require("../knex")

    (async () => {
        try {
        const users = JSON.parse(fs.readFileSync("./product.json"))
            for (const user of users) {
                const name = user.first_name
                const surname = user.last_name
                const email = user.email 
                const username = user.username
                const password = user.password
                
                const userstable = await db("users").insert({
                    name,
                    surname,
                    email,
                    username,
                    password
                })
        }
    } catch (error) {
        
    }
 })
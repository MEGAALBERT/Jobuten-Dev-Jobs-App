require("dotenv").config();

const app = require("../routes/index");

const db = require("../database/knex");
const PORT = process.env.PORT || 9000;

(async () => {
    try {
        console.log("Running migrations");
        await db.migrate.latest();

        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (err) {
        console.error("Error starting App ", err);
        process.exit(-1);
    }
})();
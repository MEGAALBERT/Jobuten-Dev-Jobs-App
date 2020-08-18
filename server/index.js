require("dotenv").config();

const app = require("../routes/index");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
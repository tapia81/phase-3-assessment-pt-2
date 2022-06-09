const db = require("./db/index");
const express = require("express");
const routes = require("./routes/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", routes);

const PORT = process.env.PORT || 3001;

db.on("error", console.error.bind(console, "MongoDB Failed to Connect"));
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

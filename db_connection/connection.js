const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("db connection successful!!"))
  .catch((err) => console.log(err));

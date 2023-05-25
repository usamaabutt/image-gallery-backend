const express = require("express");
const dotenv = require("dotenv");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({ path: "./config.env" });

require("./db_connection/connection");

app.use(express.json());

const image_gallery = require("./routes/routes");

const port = process.env.PORT || 8000;

app.use(image_gallery);

app.get("/", (req, res) => {
  res.send("<h1>Image-Gallery Backend!</h1>");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

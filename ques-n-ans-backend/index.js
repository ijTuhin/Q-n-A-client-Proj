const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const questionRoute = require("./collectionRoutes/questionRoute.js");

const app = express();

app.use(cors()); // using middleware
app.use(express.json()); // to Body parse

require("dotenv").config();

/* *******************
DB connection with Mongoose
******************** */
const database = (module.exports = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@dbhost.ueaoans.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      /* { useNewUrlParser: true, useUnifiedTopology: true } */
    )
    .then(() => console.log("Successful Connection"))
    .catch((err) => console.log(err));
});

database();

/* *******************
        Routes
******************** */
app.use("/question", questionRoute);

app.listen(3001, () => {
  console.log("Mongoose Server running");
});

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This code is used to access the environment variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// DB Files
const MemefestDB = require("./models/Memefest");

// Route Files
const addMemefestRegistrationRouter = require("./routes/addMemefestRegistrations");
const getMemefestRegistrationRouter = require("./routes/getMemefestRegistrations");
app.use("/register", addMemefestRegistrationRouter);
app.use("/get-data", getMemefestRegistrationRouter);

// Connection to the DB
const CONNECTION_URL = process.env.MONGODB_URL;
mongoose
  .connect(CONNECTION_URL)
  .then((result) => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

// Running the server
app.listen(process.env.PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " +
        process.env.PORT
    );
  else console.log("Error occurred, server can't start", error);
});

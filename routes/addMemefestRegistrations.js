const express = require("express");
var router = express.Router();
const MemefestDB = require("./../models/Memefest");

router.get("/", (req, res) => {
  res.status(200);
  res.send(`<form action="/" method="POST">
    <input name="name" type="text" placeholder="name"></input><br>
    <input name="emailid" type="text" placeholder="emailid"></input><br>
    <input name="college" type="text" placeholder="college"></input><br>
    <input name="year" type="text" placeholder="year"></input><br>
    <input name="phone" type="text" placeholder="phone"></input><br>
    <input type="submit"></input>
  </form>`);
});

router.post("/", (req, res) => {
  const content = req.body;
  const registrationForm = new MemefestDB({
    name: content.name,
    emailid: content.emailid,
    college: content.college,
    year: content.year,
    phone: content.phone,
  });

  registrationForm
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

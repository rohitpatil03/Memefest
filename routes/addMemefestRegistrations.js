const express = require("express");
var router = express.Router();
const MemefestDB = require("./../models/Memefest");

router.get("/", (req, res) => {
  res.status(200);
  res.send(`<form action="/add-MemefestRegistration" method="POST">
    <input name="name" type="text" placeholder="name"></input><br>
    <input name="emailid" type="text" placeholder="emailid"></input><br>
    <input name="college" type="text" placeholder="college"></input><br>
    <input name="year" type="text" placeholder="year"></input><br>
    <input name="phone" type="text" placeholder="phone"></input><br>
    <input name="instagramid" type="text" placeholder="instagramid"></input><br>
    <input type="submit"></input>
  </form>`);
});

router.post("/", async (req, res) => {
  const content = req.body;
  try {
    const registrationForm = new MemefestDB({
      name: content.name,
      emailid: content.emailid,
      college: content.college,
      year: content.year,
      phone: content.phone,
      instagramid: content.instagramid,
    });

    const registration = await registrationForm.save();
    res.status(200).send(registration);
  } catch (error) {
    res.status(400).send(`Error : ${error}`);
  }
});

module.exports = router;

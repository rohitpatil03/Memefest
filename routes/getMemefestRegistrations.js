const express = require("express");
var router = express.Router();
const MemefestDB = require("./../models/Memefest");

router.get("/", async (req, res) => {
  try {
    const result = await MemefestDB.find();
    const registrationCount = result.length;
    res.send(`Registration Count : ${registrationCount} <br><br> ${result}`);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

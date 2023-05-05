const express = require("express");
var router = express.Router();
const MemefestDB = require("./../models/Memefest");

router.get("/", (req, res) => {
  MemefestDB.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;

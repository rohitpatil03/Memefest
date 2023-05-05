const mongoose = require("mongoose");
require("mongoose-type-email");
const Schema = mongoose.Schema;

const MemefestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    emailid: {
      type: mongoose.SchemaTypes.Email,
      required: true,
      unique: true,
    },
    college: {
      type: String,
      //name of the college
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /^[0-9]{10}/.test(v);
        },
        message: "{VALUE} is not a valid 10 digit number!",
      },
      required: true,
    },
    instagramid: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const memefest = mongoose.model("Memefest", MemefestSchema);
module.exports = memefest;

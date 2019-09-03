const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RequestSchema = new Schema(
  {
    reqHeader: {
      type: Object,
      required: false
    },
    reqRawHeader: {
      type: Object,
      required: false
    },
    remote1: {
      type: String,
      required: false
    },
    remote2: {
      type: String,
      required: false
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = User = mongoose.model("requests", RequestSchema);

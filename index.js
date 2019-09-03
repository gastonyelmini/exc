const express = require("express");
const request = require("request");
const app = express();

const misc = require("./routes/api/misc");

require("dotenv").config();

require("request-debug")(request, function(type, data, r) {
  console.log(
    "**************************** NEW REQUEST ****************************"
  );
  console.log("TYPE: ", type);
  console.log("TYPE: ", data);
  console.log("TYPE: ", r);
});

app.use("/api", misc);

app.listen(process.env.PORT || 80, () =>
  console.log("listening on port " + process.env.PORT)
);

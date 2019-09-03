const express = require("express");
const request = require("request");
const app = express();

const misc = require("./routes/api/misc");

require("request-debug")(request, function(type, data, r) {
  console.log(
    "**************************** NEW REQUEST ****************************"
  );
  console.log("TYPE: ", type);
  console.log("TYPE: ", data);
  console.log("TYPE: ", r);
});

app.use("/api", misc);

app.listen(5000, () => console.log("listening on port 5000"));

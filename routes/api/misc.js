const express = require("express");
const router = express.Router();

// @route  GET api/misc
// @desc   Misc
// @access Public
router.get("/misc", (req, res) => {
  console.log(
    "**************************** NEW REQUEST ****************************"
  );
  console.log("REQUEST DUMP: ", req);
  console.log("REQUEST REMOTE: ", req.connection.remoteAddress);
  console.log("REMOTE: ", req.headers["x-forwarded-for"]);
  console.log(
    "**************************** END NEW REQUEST ****************************"
  );

  return res.send("http://testimage.com");
});

module.exports = router;

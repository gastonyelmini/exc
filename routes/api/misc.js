const express = require("express");
const router = express.Router();

const Request = require("../../models/Request");

// @route  GET api/misc
// @desc   Misc
// @access Public
router.get("/misc", async (req, res) => {
  const request = new Request({
    reqRawHeader: req.rawHeaders,
    reqHeader: req.headers,
    remote1: req.connection.remoteAddress,
    remote2: req.headers["x-forwarded-for"]
  });

  try {
    await request.save();
  } catch (err) {
    console.log(err);
  }

  return res.send(
    "https://google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  );
});

module.exports = router;

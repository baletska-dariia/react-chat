const express = require("express");
const debug = require("debug")("router");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  debug(req.method + " " + req.url);
  res.send(`<h1>This server can handle following requests</h1><br>
            <code>GET:/user</code> – get an array of all users<br>
            <code>GET:/user/:id</code> – get one user by ID <em>(Note that here autogenerated IDs are used)</em><br>
            <code>POST:/user/</code> – create user according to the data from the request body<br>
            <code>PUT:/user/:id</code> – update user according to the data from the request body<br>
            <code>DELETE:/user/:id</code> – delete one user by ID<br>`);
});

module.exports = router;

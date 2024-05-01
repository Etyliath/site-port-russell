var express = require('express');
var router = express.Router();

const userRoute = require('./users');

/* GET home page. */
router.get("/version", async (req, res, next) => {
  res.status(200).json({
    name: process.env.API_NAME,
    version: "1.0",
    status: 200,
    message: 'bienvenue sur l\'API !'
  });
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', userRoute);

module.exports = router;

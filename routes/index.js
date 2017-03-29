const express = require('express');
const router  = express.Router();
const path    = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render(path.join(___dirname + '/index.html'));
});

module.exports = router;

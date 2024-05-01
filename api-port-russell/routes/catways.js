const express = require('express');
const router = express.Router();

const service = require('../services/catways')


//   /* GET test vue */
//   router.get('/', function(req, res, next) {
//     res.render('index', {title:'test'});
//   });
  

router.get('/all', service.getAllCatway);
router.get('/:id', service.getCatwayByid);
router.patch('/:id', service.updateCatway);
router.put('/add', service.addCatway)
router.delete('/:id', service.deleteCatway);

module.exports = router;
const express = require('express');
const router = express.Router();

const service = require('../services/reservations')


//   /* GET test vue */
//   router.get('/', function(req, res, next) {
//     res.render('index', {title:'test'});
//   });
  

router.get('/all', service.getAllReservation);
router.get('/:id', service.getReservationByid);
router.patch('/:id', service.updateReservation);
router.put('/add', service.addReservation)
router.delete('/:id', service.deleteReservation);

module.exports = router;
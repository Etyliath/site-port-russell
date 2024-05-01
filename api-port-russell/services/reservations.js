const Reservation = require('../models/reservations')


exports.getAllReservation = (req, res, next) => {
    Reservation.find()
        .then(reservations =>res.status(200).json(reservations))
        .catch(error => res.status(400).json({error}))
  }
  
  exports.getReservationByid = (req, res, next) => {
    Reservation.findOne({_id:req.params.id})
        .then(reservation =>res.status(200).json(reservation))
        .catch(error => res.status(400).json({error}))
  }
  
  exports.addReservation = (req, res, next) => {
    const reservation = new Reservation({...req.body})
    reservation.save()
      .then(() => res.status(200).json('reservation créé'))
      .catch((error) => res.status(400).json({ error }));
  };
  
  exports.updateReservation = (req, res, next) => {
    Reservation.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id})
        .then(()=>res.status(200).json('reservation modifié'))
        .catch(error => res.status(400).json({error}))
  };
  
  exports.deleteReservation = (req, res, next) => {
    Reservation.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json('reservation supprimé'))
      .catch((error) => res.status(400).json({ error }));
  };
  
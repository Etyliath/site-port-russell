const Catway = require('../models/catway')


exports.getAllCatway = (req, res, next) => {
    Catway.find()
        .then(catways =>res.status(200).json(catways))
        .catch(error => res.status(400).json({error}))
  }
  
  exports.getCatwayByid = (req, res, next) => {
    Catway.findOne({_id:req.params.id})
        .then(catway =>res.status(200).json(catway))
        .catch(error => res.status(400).json({error}))
  }
  
  exports.addCatway = (req, res, next) => {
    const catway = new Catway({...req.body})
    catway.save()
      .then(() => res.status(200).json('catway créé'))
      .catch((error) => res.status(400).json({ error }));
  };
  
  exports.updateCatway = (req, res, next) => {
    Catway.updateOne({_id:req.params.id}, {...req.body, _id:req.params.id})
        .then(()=>res.status(200).json('catway modifié'))
        .catch(error => res.status(400).json({error}))
  };
  
  exports.deleteCatway = (req, res, next) => {
    Catway.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json('catway supprimé'))
      .catch((error) => res.status(400).json({ error }));
  };
  
const trackController = require('../controllers/track.controller');

const trackRouter = require('express').Router();

trackRouter.route('/')
    .get(trackController.getAll)
    .post(trackController.create)


trackRouter.route('/:id')
    .get(trackController.getById)
    .put(trackController.update)
    .delete(trackController.delete)
    
//TODO Faire les routes pour like/dislike une track

module.exports = trackRouter;
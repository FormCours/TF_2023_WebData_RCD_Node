const trackController = require('../controllers/track.controller');
const auth = require('../middlewares/auth.middleware');

const trackRouter = require('express').Router();

trackRouter.route('/')
    .get(trackController.getAll)
    .post(trackController.create)


trackRouter.route('/:id')
    .get(auth() ,trackController.getById) //Etre connecté (token)
    //.get(auth(["ADMIN"]) ,trackController.getById) //Etre connecté et avoir le bon role (token + role)
    .put(trackController.update)
    .delete(trackController.delete)
    
//TODO Faire les routes pour like/dislike une track

module.exports = trackRouter;
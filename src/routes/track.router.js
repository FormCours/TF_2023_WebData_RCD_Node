const trackController = require('../controllers/track.controller');
const auth = require('../middlewares/auth.middleware');

const trackRouter = require('express').Router();

trackRouter.route('/')
    .get(trackController.getAll)
    .post(trackController.create)
    
trackRouter.route('/error')
    .get(trackController.error);

trackRouter.route('/:id')
    .get(trackController.getById)                       //Non connecté 
    // .get(auth(), trackController.getById)            //Etre connecté (token)
    // .get(auth(["ADMIN"]) ,trackController.getById)   //Etre connecté et avoir le bon role (token + role)
    .put(trackController.update)
    .delete(trackController.delete)
    
trackRouter.route('/like/:id')
    .post(auth(), trackController.like)

trackRouter.route('/dislike/:id')
    .delete(auth(), trackController.dislike)

module.exports = trackRouter;
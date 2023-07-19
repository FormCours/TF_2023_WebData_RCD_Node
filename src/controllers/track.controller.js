const { Request, Response } = require('express');
const trackService = require('../services/track.service');
const { InvalidDataError } = require('../errors/invalidData.error');
const { NotFoundError } = require('../errors/notFound.error');

const trackController = {
    /**
     * Get All
     * @param { Request } req
     * @param { Response } res
     */
    getAll : async(req, res) => {
        // res.sendStatus(501); //A mettre tant qu'on n'a pas implémenté la méthode

        // Si offset et limit pour pagination
        offset = req.pagination.offset
        limit = req.pagination.limit

        const tracks = await trackService.getAll(offset, limit);
        res.status(200).json(tracks);
    },

    /**
     * Get ById
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        // res.sendStatus(501)
        const id = req.params.id;
        try {
            const track = await trackService.getById(id);
            res.status(200).json(track);
        }
        catch(err) {
            throw new NotFoundError(err.message);
            // res.status(404).json({ errorMsg : err.message })
        }
    },

    /**
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : async (req, res) => {        
        // res.sendStatus(501);
        const trackToAdd = req.body;
        try {
            const track = await trackService.create(trackToAdd);           
            res.status(201).json(track);
        }
        catch(err) {
            throw new InvalidDataError(err.message);
            //res.status(422).json({ errorMsg : err.message })
        }

    },

    /**
     * Update
     * @param { Request } req
     * @param { Response } res
     */
    update : async (req, res) => {
        const id = req.params.id;
        const newTrack = req.body;
        const updated = await trackService.update(id, newTrack);
          
        if(updated) {
            res.sendStatus(204);
        }
        else {
            throw new NotFoundError("Track Not Found" )
            //res.status(404).json({ errorMsg : "Track Not Found" })
        }
    },

    /**
     * Delete
     * @param { Request } req
     * @param { Response } res
     */
    delete : async(req, res) => {
        const id = req.params.id;
        const deleted = await trackService.delete(id);
        if(deleted) {
            res.sendStatus(204);
        }
        else {
            throw new NotFoundError("Track Not Found");
            // res.status(404).json({ errorMsg : "Track Not Found" })
        }
    },

    /**
     * Like
     * @param { Request } req
     * @param { Response } res
     */
    like : async (req, res) => {
        const trackId = req.params.id;
        const userId = req.user.id;
        try {
            const liked = await trackService.like(userId, trackId);
            res.sendStatus(201);
            
            
        }
        catch(err) {
            throw new NotFoundError(err.message)
            // res.status(404).json({ errorMsg : err.message })
        }
        
    },

    /**
     * Dislike
     * @param { Request } req
     * @param { Response } res
     */
    dislike : async (req, res) => {
        const trackId = req.params.id;
        const userId = req.user.id;
        try {
            const liked = await trackService.dislike(userId, trackId);            
            res.sendStatus(204);
            
        }
        catch(err) {
            throw new NotFoundError(err.message)
            // res.status(404).json({ errorMsg : err.message })
        }
        
    },

    /**
     * Error → Exemple de code qui provoque une erreur (╯°□°）╯︵ ┻━┻
     * @param { Request } req
     * @param { Response } res
     */
    error: async (req, res) => {

        // Déclanchement explicite d'une erreur, pour la demo
        throw new Error('Boum ! C\'est tout cassé 💣')
    }
}

module.exports = trackController;
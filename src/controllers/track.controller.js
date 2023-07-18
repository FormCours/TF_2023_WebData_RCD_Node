const { Request, Response } = require('express');
const trackService = require('../services/track.service');

const trackController = {
    /**
     * Get All
     * @param { Request } req
     * @param { Response } res
     */
    getAll : async(req, res) => {
        // res.sendStatus(501); //A mettre tant qu'on n'a pas implémenté la méthode
        // Si offset et limit pour pagination
        // offset = req.pagination.offset
        // limit = req.panigation.limit
        const tracks = await trackService.getAll(/*offset, limit*/);
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
            res.status(404).json({ errorMsg : err.message })
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
            res.status(400).json({ errorMsg : err.message })
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
            res.status(404).json({ errorMsg : "Track Not Found" })
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
            res.status(404).json({ errorMsg : "Track Not Found" })
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
            res.status(404).json({ errorMsg : err.message })
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
            res.status(404).json({ errorMsg : err.message })
        }
        
    }
}

module.exports = trackController;
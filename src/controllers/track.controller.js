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
        //Si offset et limit pour pagination
        //offset = req.pagination.offset
        //limit = req.panigation.limit
        const tracks = await trackService.getAll(/*offset, limit*/);
        res.status(200).json(tracks);
    },

    /**
     * Get ById
     * @param { Request } req
     * @param { Response } res
     */
    getById : async (req, res) => {
        res.sendStatus(501)
    },

    /**
     * Create
     * @param { Request } req
     * @param { Response } res
     */
    create : async (req, res) => {
        res.sendStatus(501)
    },

    /**
     * Update
     * @param { Request } req
     * @param { Response } res
     */
    update : async (req, res) => {
        res.sendStatus(501)
    },

    /**
     * Delete
     * @param { Request } req
     * @param { Response } res
     */
    delete : async(req, res) => {
        res.sendStatus(501)
    },

    /**
     * Like
     * @param { Request } req
     * @param { Response } res
     */
    like : () => {

    },

    /**
     * Dislike
     * @param { Request } req
     * @param { Response } res
     */
    dislike : () => {

    }
}

module.exports = trackController;
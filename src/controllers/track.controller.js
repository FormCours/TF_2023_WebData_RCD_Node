const { Request, Response } = require('express');

const trackController = {
    /**
     * Get All
     * @param { Request } req
     * @param { Response } res
     */
    getAll : async(req, res) => {
        res.sendStatus(501); //A mettre tant qu'on n'a pas implémenté la méthode
        
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
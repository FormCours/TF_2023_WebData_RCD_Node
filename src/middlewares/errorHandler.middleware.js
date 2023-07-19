const { Request, Response, NextFunction } = require('express');
const { BadRequestError } = require('../errors/badRequest.error');
const { InvalidDataError } = require('../errors/invalidData.error');
const { NotFoundError } = require('../errors/notFound.error');


/**
 * Middleware pour la gestion des erreurs
 * @param {{defaultLimit: number?, defaultOffset: number?, maxLimit: number?}} options 
 * @returns {(error: Error, req: Request, res : Response, next : NextFunction) => Void}
 */
const errorHandler = () => {

    return (error, req, res, next) => {

        // Envoi un code d'erreur au client
        // Il est possible en fonction du type d'erreur, d'envoyer une réponse adapté (code + message)

        // Erreur connu
        if (error instanceof NotFoundError) {
            res.status(404).json({ errorMsg: error.message });
            return;
        }
        if (error instanceof InvalidDataError) {
            res.status(422).json({ errorMsg: error.message });
            return;
        }
        if(error instanceof BadRequestError) {
            res.status(400).json({ errorMsg : error.message });
            return;
        }

        // Erreur non traité
        if (process.env.NODE_ENV === 'development') {
            // En « dev » on souhaite obtenir le max d'information sur l'erreur dans la console !
            console.error(error);
            res.status(500).json({
                name: error.name,
                message: error.message
            });
        }
        else {
            // En « Prod » on sauvegarde la trace de l'erreur dans un fichier log
            if (process.env.NODE_ENV === 'production') {
                // TODO Save error in log file
            }
            res.sendStatus(500);
        }
    };
};

module.exports = errorHandler;
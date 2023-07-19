const { Request, Response, NextFunction } = require('express');

const DEFAULT_OPTIONS = {
    defaultOffset: 0,
    defaultLimit: 20,
    maxLimit: 100
};

/**
 * Middleware pour la gestion de la pagination
 * @param {{defaultLimit: number?, defaultOffset: number?, maxLimit: number?}} options 
 * @returns {(req: Request, res : Response, next : NextFunction) => Void}
 */
const pagination = (options) => {

    const { defaultLimit, defaultOffset, maxLimit } = { ...DEFAULT_OPTIONS, ...options }; 

    if(defaultLimit > maxLimit) {
        throw new Error(`Pagination options error : defaultLimit (${defaultLimit}) must be less than maxLimit (${maxLimit}).`);
    };

    return (req, res, next) => {
        
        // Récuperation des valeurs contenu dans l'url « ?offset=0&limit=42 » 
        const userOffset = parseInt(req.query.offset);
        const userLimit = parseInt(req.query.limit);

        // Définition de la valeur de l'offset
        const offset = !isNaN(userOffset) && userOffset >= 0 ? userOffset : defaultOffset;

        // Définition de la valeur de la limite
        const limit = !isNaN(userLimit) && userLimit > 0 ? Math.min(userLimit, maxLimit) : defaultLimit;

        // Injecter les données dans l'objet "req"
        req.pagination = { offset, limit };

        // Fin du middleware
        next();
    };
};

module.exports = pagination;
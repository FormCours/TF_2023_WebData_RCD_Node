const db = require("../models");
const jwtUtils = require("../utils/jwt.utils");

const auth = (roles) => {
    return async(req, res, next) => {
        const authorization = req.headers.authorization;
        const token = authorization?.split(' ')[1];
        // "Bearer "
        if(!token /*|| token === '' || token === "undefined"*/ ) {
            res.sendStatus(401);
        }
        try {
            const payload = await jwtUtils.decode(token);
            //Si roles passés en param
            if(roles){
                //check db
                const user = await db.User.findByPk(payload.id);
                if(!roles.includes(user.role)) {
                    res.sendStatus(403);
                }
            }
            req.user = payload;
            next();
        }
        catch(err) {
            res.sendStatus(401);
        }
    }
}

module.exports = auth
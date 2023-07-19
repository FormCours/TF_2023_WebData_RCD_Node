const { BadRequestError } = require("../errors/badRequest.error");
const authService = require("../services/auth.service");
const jwtUtils = require("../utils/jwt.utils");

const authController = {
    /**
     * Register
     * @param { Request } req
     * @param { Response } res
     */
    register : async(req, res) => {
        const userToAdd = req.body;
        try {
            const user = await authService.register(userToAdd);
            const token = await jwtUtils.encode(user);
            res.status(201).json({ user, token });
        }
        catch(err) {
            throw new BadRequestError(err.message);
            // res.status(400).json({ errorMsg : err.message });
        }
    },

    /**
     * Login
     * @param { Request } req
     * @param { Response } res
     */
    login : async(req, res) => {
        const credentials = req.body;
        try {
            const user = await authService.login(credentials.email, credentials.password);
            const token = await jwtUtils.encode(user);
            res.status(200).json({ user, token });
        }
        catch(err) {
            throw new BadRequestError(err.message);
            // res.status(400).json({ errorMsg : err.message });
        }
    }
}

module.exports = authController
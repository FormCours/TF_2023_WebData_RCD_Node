const authService = require("../services/auth.service");

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
            res.status(201).json(user);
        }
        catch(err) {
            res.status(400).json({ errorMsg : err.message });
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
            res.status(200).json(user);
        }
        catch(err) {
            res.status(400).json({ errorMsg : err.message });
        }
    }
}

module.exports = authController
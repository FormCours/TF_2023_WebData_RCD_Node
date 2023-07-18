const argon2 = require("argon2");
const db = require("../models");
const UserDTO = require("../dto/user.dto");

const authService = {
    register : async(userToAdd) => {
        try {
            userToAdd.password = await argon2.hash(userToAdd.password);
            const user = await db.User.create(userToAdd);
            return new UserDTO(user);
        }
        catch(err) {
            throw new Error("Bad Request");
        }
    },

    login : async(email, password) => {
        const user = await db.User.findOne({
            where : { email }
        });
        if(!user) {
            throw new Error("Bad credentials");
        }
        try {
            const samePwd = await argon2.verify(user.password, password);
            if(samePwd) {
                return new UserDTO(user);
            }
            else {
                throw new Error("Bad credentials");
            }
        }
        catch(err) {
            throw err;
        }
        
        
    }
}

module.exports = authService;
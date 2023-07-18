const jwt = require("jsonwebtoken")
const { JWT_SECRET, JWT_AUDIENCE, JWT_ISSUER } = process.env

const jwtUtils = {
    encode : (user) => {
        return new Promise((resolve, reject) => {

        const payload = {
            id : user.id,
            role : user.role
        }

        const options = {
            issuer : JWT_ISSUER,
            audience : JWT_AUDIENCE,
            expiresIn : '365d',
            algorithm : "HS512",

        }

        jwt.sign(payload, JWT_SECRET , options, (err, token) => {
            if(err) {
                reject("Token generation error");
            }
            resolve(token);
        })
    })
        
    },

    decode : (token) => {
        return new Promise((resolve, reject) => {
            const options = {
                issuer : JWT_ISSUER,
                audience : JWT_AUDIENCE
            }
            jwt.decode(token, JWT_SECRET, options, (err, payload) => {
                if(err) {
                    reject("Token decode error");
                }
                resolve(payload);
            })
        })
    }
}

module.exports = jwtUtils;
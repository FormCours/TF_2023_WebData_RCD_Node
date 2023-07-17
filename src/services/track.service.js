const authService = {
    getAll : async(/*offset, limit*/) => {
        //TODO récup les tracks en db
    },

    getById : async(id) => {
        //TODO recup la track
    },

    create : async(trackToAdd) => {
        //TODO ajout de la track en db
    },

    update : async(id, trackToUpdate) => {
        //TODO modif de la track en db
    },

    delete : async(id) => {
        //TODO supprimer la track de la db
    },

    like : async(userId, trackId) => {
        //TODO
    },

    dislike : async(userId, trackId) => {
        //TODO
    }
}


module.exports = authService
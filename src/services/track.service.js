const TrackDTO = require("../dto/track.dto");
const db = require("../models")

const trackService = {
    getAll : async(/*offset, limit*/) => {
        const tracks = await db.Track.findAll();
        return tracks.map(track => new TrackDTO(track));
    },

    getById : async(id) => {
        const track = await db.Track.findByPk(id);
        if(!track){
            throw new Error("Track Not Found");
        }
        else {
            return new TrackDTO(track);
        }
    },

    create : async(trackToAdd) => {
        try {
            const addedTrack = await db.Track.create(trackToAdd);
            return new TrackDTO(addedTrack);
        }
        catch(err) {
            throw new Error("Add Track failed");
        }
        
    },

    update : async(id, trackToUpdate) => {
        const tabRows = await db.Track.update(trackToUpdate, {
            where : { id }
        });
        return tabRows[0] === 1;
    },

    delete : async(id) => {
       const rows = await db.Track.destroy({
        where : { id }
       })
       return rows === 1;
    },

    like : async(userId, trackId) => {
        try {
            const track = await db.Track.findByPk(trackId);
            if(!track){
                throw new Error("Track Not Found");
            }
            const user = await db.User.findByPk(userId);
            if(!user) {
                throw new Error("User Not Found");
            }
            const liked = await track.hasUser(user);
            if(liked) {
                throw new Error("Track already liked")
            }
            await track.addUser(user);
        
        }
        catch(err) {
            throw err;
        }
    },

    dislike : async(userId, trackId) => {
        try {
            const track = await db.Track.findByPk(trackId);
            if(!track) {
                throw new Error("Track Not Found");
            }
            const user = await db.User.findByPk(userId);
            if(!user) {
                throw new Error("User Not Found");
            }
            const liked = await track.hasUser(user);
            if(!liked) {
                throw new Error("Track not liked")
            }
            
            await track.removeUser(user);
        }
        catch(err) {
            throw err;
        }
    }
}


module.exports = trackService
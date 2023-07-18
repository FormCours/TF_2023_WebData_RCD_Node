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
        //TODO
    },

    dislike : async(userId, trackId) => {
        //TODO
    }
}


module.exports = trackService
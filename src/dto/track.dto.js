
class TrackDTO {
    // constructor(track){
    //     this.id = track.id
    //     //...
    // }
    constructor({ id, title, artist, duration, genre }) {
        this.id = id;
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.genre = genre;
    }
}

module.exports = TrackDTO
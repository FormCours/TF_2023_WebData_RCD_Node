const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_SERVER } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host : DB_SERVER,
    dialect : 'mssql' //Tedious
});

const db = {}
db.sequelize = sequelize;

// Liaison modèles à l'objet db
db.User = require('./user.model')(sequelize);
db.Track = require('./track.model')(sequelize);

// Définition des relations entre les modèles
db.Track.belongsToMany(db.User, { through : 'MM_User_Track' });
db.User.belongsToMany(db.Track, { through : 'MM_User_Track' });

module.exports = db;

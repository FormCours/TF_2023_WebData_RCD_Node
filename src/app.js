// * Imports ----------------------------------- 
// Config des variables d'environnement
require('dotenv').config();

// Express
const express = require('express');

// Middleware gestion erreurs async
require('express-async-errors');

// Les cors
const cors = require('cors');

// * Server ----------------------------------- 
// Création du serveur
const app = express();

// Utilisation des cors
app.use(cors());

// Import objet db
const db = require('./models');
// Connection à la db
db.sequelize.authenticate()
    .then(() => { console.log('Connection DB success'); })
    .catch((err) => { console.log('Connection DB failed : ', err); })

// db.sequelize.sync({ force : true })

// Middleware app-lvl
app.use(express.json()); // -> permet d'utiliser le json pour envoyer des données

const pagination = require('./middlewares/pagination.middleware');
app.use(pagination());

// Utilisation du router
const router = require('./routes');
app.use('/api', router);

// Gestion des erreurs
const errorHandler = require('./middlewares/errorHandler.middleware');
app.use(errorHandler());

// Ecoute du serveur
app.listen(process.env.PORT, () => {
    console.log(`Server started on port:${process.env.PORT}`);
})
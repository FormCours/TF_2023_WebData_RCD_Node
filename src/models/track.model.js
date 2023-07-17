const { Sequelize, ModelStatic, DataTypes } = require('sequelize');
const { sequelize } = require('.');

/**
 * Modèle Track
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const Track = sequelize.define('Track', {
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        artist : {
            type : DataTypes.STRING,
            allowNull : false
        },
        duration : {
            type : DataTypes.INTEGER,
            allowNull : false,
            validate : {
                min : 1,
                max : 604800
            }
        },
        genre : {
            type : DataTypes.ENUM('Pop', 'Rock', 'Rap', 'Classique', 'Jazz'),
            allowNull : false
        }
    }, { tableName : 'Track'})
    return Track;
}
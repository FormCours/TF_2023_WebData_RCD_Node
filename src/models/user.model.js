const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        // id pas indispensable, d'office créé en int auto incrémenté
        firstname : {
            type : DataTypes.STRING,
            allowNull : false
        },
        lastname : {
            type : DataTypes.STRING,
            allowNull : false
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : 'UK_User_Email', //Soit boolean true mais vous laissez au SGBD le soin du nom de la contrainte, soit string est c'est le nom de la contrainte et c'est d'office true
            
            //Validation en plus, possible
            //Yup restera la validation prioritaire puisque la requête est bloquée à la racine si les données ne sont pas ok
            //Cette verif ↓ vous permet de refaire une vérification juste avant l'ajout en DB
            //https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#per-attribute-validations
            validate : {
                isEmail : true,
                notNull : true,
                notEmpty : true
            }
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        role : {
            type : DataTypes.ENUM('ADMIN', 'USER'),
            allowNull : false,
            defaultValue : 'USER'
        }
    }, {
        tableName : 'User'
    });

    return User;
}
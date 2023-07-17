# Feuille de route

## Initialiser le projet :
### Créer le projet :
```
    npm init
```
Si flemme de setup le projet : projet par défaut
```
    npm init -y
```
### Les dépendances :
#### Dev :
* nodemon (pour avoir le projet lancé en tâche de fond)
#### Projet :
* express
* express-async-errors (middleware pour gérer les erreurs async d'express)
* sequelize (ORM pour faciliter les intéractions DB)
* tedious (pour utiliser mssql (si autre langage, autre lib))
* yup (validation)
* dotenv (pour gérer les variables d'environnement)
* cors (gestion des cors)
* jsonwebtoken (pour créer et lire un token)
* argon2 (ou bcrypt -> hashage de password)
* (multer) (middleware pour la gestion des fichiers)

<hr/>

# Utilitaires
## Extension de la flemme pour créer un gitignore
```
    gitignore de Code Zombie
    Ctrl+Maj+P ou F1 -> Add gitignore -> Sélectionner node
```
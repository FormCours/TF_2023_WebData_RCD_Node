const userRouter = require('express').Router()

userRouter.route('/')
    .get( (req, res) => { res.sendStatus(501) })

userRouter.route('/:id')
    .get( (req, res) => { res. sendStatus(501) })
    .put( (req, res) => { res. sendStatus(501) })
    .delete( (req, res) => { res. sendStatus(501) })

userRouter.route('/playlist')
    .get()
module.exports = userRouter;
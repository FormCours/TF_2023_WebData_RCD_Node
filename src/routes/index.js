const authRouter = require('./auth.router');
const trackRouter = require('./track.router');
const userRouter = require('./user.router');

const router = require('express').Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/track', trackRouter);

module.exports = router;
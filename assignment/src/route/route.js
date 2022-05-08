const express = require('express');

const router = express.Router();

const userController = require('../controller/userController');
const movieController = require('../controller/movieController');
const cinemaController = require('../controller/cinemaController');
const middleware = require('../middleware/middleware')

//users
router.post('/register', userController.registeruser);
router.post('/login', userController.loginuser);
router.get('/fetch', userController.getuser);
router.get('/fetch/:userId', middleware.userAuth,userController.getuserById);
router.post('/update/:userId', middleware.userAuth,userController.updateuser);
router.delete('/delete/:userId', middleware.userAuth,userController.deleteuser);

//movies
router.post('/cinema', cinemaController.registerCinema)
router.post('/movie',movieController.registerMovie);

module.exports = router;
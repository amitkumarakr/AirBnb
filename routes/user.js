const express = require('express');
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const bodyParser = require('body-parser');
const { saveRedirectUrl } = require('../middleware.js');
// const saveRedirectUrl = require('../middleware.js')
router.use(bodyParser.urlencoded({ extended: true }));

const userController = require("../controllers/users.js");

router.get("/signup",userController.getsignup);
router.post("/signup",wrapAsync(userController.postsignup));

router.get("/login",userController.getlogin);
router.post('/login', saveRedirectUrl,
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }),userController.postlogin);

router.get("/logout",userController.logout)

module.exports = router;
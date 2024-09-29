const express = require('express');
const router = express.Router();

// Import routes
const signupRoute = require('./signup');
const loginRoute = require('./login');
const getAllUsersRoute = require('./getAllusers'); 
// Use signup and login routes & GetAllUsers
router.use(signupRoute);
router.use(loginRoute);
router.use(getAllUsersRoute);
module.exports = router;

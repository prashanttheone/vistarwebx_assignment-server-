const express = require('express');
const router = express.Router();

// Import routes
const signupRoute = require('./signup');
const loginRoute = require('./login');

// Use signup and login routes
router.use(signupRoute);
router.use(loginRoute);

module.exports = router;

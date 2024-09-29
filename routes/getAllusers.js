const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/getAlluser', async (req, res) => {
  try {
      const users = await User.find(); // Get all users details
      res.json(users);
  } catch (error) {
      res.status(500).json({ msg: 'Server error' });
  }
});
module.exports = router;
const express = require("express");
const healthCheckController = require('../controllers/health.controller');

const router = express.Router();

router.get('/sync', (req, res) => {
  const result = healthCheckController.healthCheckSync();
  res.json({
    health: result,
    status: 200
  });
});

router.get('/async', async (req, res) => {
  const result = await healthCheckController.healthCheckAsync();
  res.json({
    health: result,
    status: 200
  });
});


module.exports = router;
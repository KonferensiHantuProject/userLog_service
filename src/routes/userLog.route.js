// Contoh Routing
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const userLogController = require('../controllers/api/userLog.controller');

// Use JWT Check
router.use(auth.authenticateJWT)

// Index
router.get('/activities', userLogController.index);

router.post('/activities', userLogController.store);

module.exports = router;
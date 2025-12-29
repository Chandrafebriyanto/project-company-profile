const router = require('express').Router();
const userController = require('../controllers/userController');

// Kalau ada yang akses POST ke alamat ini, jalankan fungsi createUser
router.post('/register', userController.createUser);

module.exports = router;
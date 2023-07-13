const router = require('express').Router();
const ctrl = require('../controllers/homeController');

router.get('/', ctrl.output.home);

module.exports = router;
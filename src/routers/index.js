const router = require('express').Router();
const ctrl = require('../controllers/homeController');

router.get('/', ctrl.output.home);
router.get('/map', ctrl.output.map);

module.exports = router;
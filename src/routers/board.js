const router = require('express').Router();
const ctrl = require('../controllers/BoardController')

router.post('/', ctrl.process.upload);


module.exports = router;
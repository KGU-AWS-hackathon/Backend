const router = require('express').Router();
const ctrl = require('../controllers/kickBoardController');

router.get('/', ctrl.output.kickBoardList);


module.exports = router;
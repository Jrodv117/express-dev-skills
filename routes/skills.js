var express = require('express');
var router = express.Router();

//Require the controller that exports Skills CRUD frunctions
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
// All paths start with '"skills"
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:id', skillsCtrl.delete)

module.exports = router;

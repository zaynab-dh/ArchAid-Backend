var express = require('express');
var router = express.Router();
var zonerulesController = require('../controllers/zonerulesController');

/* GET zonerules listing. */
router.get('/', zonerulesController.getAll);
router.get('/:id', zonerulesController.get);
router.get('/getByZoneId/:zoneId', zonerulesController.getByZoneId);
router.post('/projectTest/:zoneCode', zonerulesController.projectTest);
router.post('/projectTest1/:zoneCode', zonerulesController.projectTest1);
router.post('/', zonerulesController.post);
router.put('/:id', zonerulesController.put);
router.delete('/:id', zonerulesController.delete);


module.exports = router;
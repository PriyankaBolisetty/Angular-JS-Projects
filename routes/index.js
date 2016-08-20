var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Comparator Express'});
});

// Handle rhw Add request
router.post('/max', function (req, res, next) {
    var n1 = parseInt(req.body.n1);
    var n2 = parseInt(req.body.n2);
    var maxNo = Math.max(n1, n2);
    res.send({max: maxNo});
});

// Handle rhw Subtract request
router.post('/min', function (req, res, next) {
    var n1 = parseInt(req.body.n1);
    var n2 = parseInt(req.body.n2);
    var minNo = Math.min(n1, n2);
    res.send({min: minNo});
});

module.exports = router;

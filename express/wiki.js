const express = require('express')

const router = express.Router();

router.get('/', function(req, res) {
    res.send('Página de inicio de nuestro Wiki');
});


router.get('/about', function(req, res) {
    res.send('Acerca de esta Wiki');
});

module.exports = router;
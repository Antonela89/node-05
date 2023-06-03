const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => { //recibe un formulario
    console.log(req.body);
    res.send('producto creado: ' + req.body.nombre);
})

router.put('/update', (req, res) => {
    console.log(req.body);
    res.send('producto modificado: ' + req.body.nombre);
})

module.exports = router;
//archivo de rutas

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Página principal');
})

router.get('/contacto', (req, res) => {
    res.send('Página de contacto');
})

module.exports = router;
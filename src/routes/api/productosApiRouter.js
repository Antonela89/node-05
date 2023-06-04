const express = require('express');
const router = express.Router();

router.post("/create", (req, res) => { //recibe un json
    console.log(req.body);
    res.send('producto creado con Api' + req.body.nombre);
})

router.put("/update", (req, res) => {
    console.log(req.body);
    res.send(`producto editado: ${req.body.nombre}, nuevo precio: ${req.body.precio}`);
})

module.exports = router;
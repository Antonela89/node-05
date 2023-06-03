const express = require('express');
const router = express.Router();

router.post("/create", (req, res) => { //recibe un json
    console.log(req.body);
    res.send('producto creado con Api' + req.body.nombre);
})

module.exports = router;
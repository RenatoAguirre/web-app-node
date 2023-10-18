
const express = require('express');
const router = express.Router();



router.get("/", (req, res) =>{
    res.send("Hola como estas?");
});
router.get("/:nombre", (req, res) =>{ //dos puntoos para indicar q es alfo del usuario
    const greet = `hola ${req.params.nombre} como estas??`;
    res.send(greet);
});

module.exports = router;

const express = require('express');
const router = express.Router();

const users = [
    {
        "id": 1,
        "first_name": "juan",
        "last_name": "hernandez",
        "edad": 26
    },
    {
        "id": 2,
        "first_name": "renato",
        "last_name": "aguirre",
        "edad": 21
    },
];

router.get("/", (req, res) =>{
    res.send(users);
});


router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.filter((user) => user["id"] === id);
    res.send(user);

})
module.exports = router;
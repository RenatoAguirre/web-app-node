const express = require('express');
const app = express();

const port = 3000;

const greetRoutes = require("./routes/greet/index.js");
const userRoutes = require("./routes/user/index.js");


app.get("/", (req, res) =>{
    res.send("Hola");
});

app.use("/greet", greetRoutes);
app.use("/user",userRoutes);

app.listen(port);
const express = require('express');
const app =express();
const cors = require("cors");
const { UsbRounded } = require('@material-ui/icons');

//middleware
app.use(express.json());//req.body -comunicates with tghe client
app.use(cors());

//ROUTES//
//register and login routes

app.use("/auth", require("./routes/jwtAuth"));
//dashboard router
app.use("/dashboard", require("./routes/dashboard"));

//forget & reset password route
app.use("/forget",require("./routes/forget&resetPass"));
app.use("/reset/:id/:token",require("./routes/forget&resetPass"));



app.listen(5000,() =>{
    console.log("server is running on port 5000");
});

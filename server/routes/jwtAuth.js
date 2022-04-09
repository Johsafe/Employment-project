const router = require("express").Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo =require("../middleware/validInfo")
const authorize= require("../middleware/authorization");
const { application } = require("express");


//registering

router.post("/register",validInfo, async (req,res) => {
    try {
        
           //1. destructure the req.body(name.email,pass)
        const {  name, email , password} = req.body; 

           //2. check if user exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[
            email
        ]);        
        if(user.rows.length !==0){
            return res.status(401).json("User already exists")
        }
        
            //3. bcryt the user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password,salt);

            //4.enter the new user inside database

        const newUser = await pool.query(

            "INSERT INTO users (user_name, user_email ,user_password) VALUES ($1 ,$2 ,$3) RETURNING *",
            [name, email, bcryptPassword]
            
        );
        // res.json(newUser.rows[0]);
 
        //5.generating our jwt token
        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({ token })


    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});


//login route
router.post("/login",validInfo, async(req,res) =>{
    try {
        //1.destructure the req.body
        const {email ,password } = req.body;

        //2.check if the user doesn't exist(if not the throw an error)
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1",[
            email
        ]);        
        if(user.rows.length ===0){
            return res.status(401).json("Password or Email is incorrect")
        }
         
        //3.check if incomming password is the same as the database password
        const validPassword = await bcrypt.compare(password,user.rows[0].user_password);

        if(!validPassword){
            return res.status(401).json("Password or Email is incorrect")
        }

        //4.give the the jwt token

        const token = jwtGenerator(user.rows[0].user_id);

        res.json({ token })
        
    } catch (err) {

        console.error(err.message);
        res.status(500).send("server Error");
        
    }
});


//verification route
router.post("/is-verify" ,authorize, async(req,res) =>{
    try {
        res.json(true);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
});

module.exports = router;
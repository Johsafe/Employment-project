const router = require("express").Router();
const pool =require("../db");
 const authorization =require("../middleware/authorization");
const bcrypt = require("bcrypt");
// const validInfo =require("../middleware/validInfo")
const jwtGenerator = require("../utils/jwtGenerator");
const sgMail = require('@sendgrid/mail')



// send email

//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
const API_KEY =
'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'

sgMail.setApiKey(API_KEY)


router.post("/" , async( req ,res) =>{

    //get/destructure email
     const {email} =req.body;
    //  console.log({email});
    
    // chek if user-email exist 
    const user = await pool.query("SELECT * FROM users WHERE user_email =$1",[
        email
    ])
    if (user.rows.length ===0){
        return res.status(401).json("Invalid Email")

    }
    // //generate token
   const token = jwtGenerator(user.rows[0].user_id);
   res.json({token})
       
//generate link and send to user email    
const message ={
    to: {email},
    from: {
        name:'Employment Project',
        email:'johsafe2001@gmail.com',
    },
    subject:'welcome',
    text:"hello from us",
    html:"<h1>To chance your password click on the <a href='http://localhost:3000/reset/${user.id}/${token}'>link</a> below</h1>"
}
sgMail
  .send(message)
//   .then((response)=> console.log('Email sent..'))
  .catch((error)=> console.log(error.message));
//    console.log(link)
   
  

    // // const link =`http://localhost:3000/reset/${user.id}/${token}`
    // // console.log(link)
    // res.send("password reset link has been send to the email")

});


// router.get("/reset/:id/:token" , async(req,res,next)=>{

 router.post("/:id/:token" ,authorization, async(req,res,next)=>{
       
      //validate id  and token by use of authorizatin middleware
    
    // const secret = JWT_secrete + bcrypt_password

    // const {password ,confirm_password} = req.body 

 try {
    //     const payload = jwt.verify(token,secret) 
    //     //validate pass1 & pass2 //can use express validatotor 
    //     //find the user with the payload email and id and update with new pass
         
    //     //hash the password b4  saving  
    //     user.password =password
    //     // res.send(user)
    
         
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
        
    }
 });

module.exports = router;
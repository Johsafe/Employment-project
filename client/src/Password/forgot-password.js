
import {useState } from 'react';
import { Link,useHistory} from 'react-router-dom';
import{ toast } from "react-toastify"



const ForgetPass=()=>{
        //check and collects input values
           const history = useHistory()
           const [inputs, setInputs] = useState({
            
               email: "",
               
           });
           const{ email} = inputs;
       
           const onChange = e =>
               setInputs({...inputs,[e.target.name]: e.target.value});
           
       
           //submit to restful api to get jwt token
           const onSubmitForm = async e => {
               e.preventDefault();
              
               if(!email){
                   return toast.error("please input email");
               }else{
            
                toast.success("password reset link has been send to the email");
                history.push("/login")
               }
       
               try {
                    const body = {email}
                   const response = await fetch("http://localhost:5000/forget",
                   {
                       method: "POST",
                       headers:{"Content-type" :"application/json"
                       },
                       body: JSON.stringify(body)
                   });
                   const parseRes = await response.json();
                   if(parseRes.token){
                       localStorage.setItem("token", parseRes.token)
                       
                       toast.success("email sent successfully")
                   }else{
                
                       toast.error(parseRes);
                   }
                         
               } catch (err) {
                   console.log(err.message);
                   
               }
           }
    return(                
           <div className="container border"
           style={{
               marginTop:"50px",
               width: "50%"
           }}>
         <form onSubmit={onSubmitForm} style={{ margin:"25px 85px 75px 100px"}}>
         <h1 style={{marginTop:"25px"}}>Forgot Password </h1>
         <div>
            <input type="email" name="email"
            placeholder="email" className='form-control'
            value={email}
            onChange={e=> onChange(e)}
            />
            <input type="submit" value="send" className="form-control btn btn-primary"
            style={{ marginTop: "30px"}}/>
 
            <Link to="/login"> Login</Link>
            </div>
            
            
            </form>
            </div>
    );
}

export default ForgetPass;
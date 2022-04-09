

import {useState} from 'react';
import { useHistory ,useParams} from 'react-router-dom';
import{ toast } from "react-toastify"
          
    

function ResetPass(){
    const history = useHistory()
    const {token ,id} =useParams();
    console.log(id);
    console.log(token)
    const [inputs, setInputs] = useState({
            
        password: "",
        confirmPassword:"",
        
    });
    const{ password , confirmPassword } = inputs;

    const onChange = e =>
        setInputs({...inputs,[e.target.name]: e.target.value});
    

    //submit to restful api to get jwt token
    const onSubmitForm = async e => {
        e.preventDefault();
       
        if(!password || !confirmPassword){
            return toast.error("please input email");
        }else{
     
         toast.success("Reset Successful!");
         history.push("/login")
        }

        try {
             const body = {password, confirmPassword}
            const response = await fetch("http://localhost:5000/reset/:id/:token",
            {
                method: "POST",
                headers:{"Content-type" :"application/json"
                },
                body: JSON.stringify(body,{token})
            });
            console.log(response.json)
                  
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
      <h1 style={{marginTop:"25px"}}>Reset Password for gmail</h1>
        
                <input type="password" name="password" 
                value={password}
                onChange={e=> onChange(e)}
                placeholder="password" className="form-control my-3"/>

                <input type="password" name="Confirmpassword" 
                value={ confirmPassword}
                onChange={e=> onChange(e)}
                placeholder="Confirmpassword" className="form-control my-3"/>

            <input type="submit" value="Reset" className="form-control btn btn-primary"
            style={{ marginTop: "30px"}}/>
            </form>
            
        </div>
    );
}

export default ResetPass;
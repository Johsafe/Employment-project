import { PostAdd } from "@material-ui/icons";
import { useState } from "react";
import profile from "../images/profile.png";
import {toast} from 'react-toastify';



const ProfileImage =  () =>{

    const [profile , setProfile] = useState({
        file:[],
    });

    const handleInputChange = (e) =>{
        setProfile({
            ...profile,
            file:e.target.file[0],
        })
         
    }

    const Submit = async ()=>{
        const formdata = new FormData();
        formdata.append('avatar', profile.file);
        
       const response = await fetch("http://localhost:5000/",
       {
           method:"POST",
           headers: {"content-type": "application/json"},
           body : JSON.stringify({
               formdata
           })
    }).then(function(response){
        return response.json();
    })
    }

    
    
    return(
        <div className="container"> 
            <div className="imageholder">
                <input type="file" className="form-control"
                name="upload_file" onChange={handleInputChange }/>

            </div>
            <div>
        
            <button type="submit" className="btn btn-dark"
            onClick={() => Submit()}> Upload</button>
        </div>
        </div>
    );
}

export default ProfileImage;
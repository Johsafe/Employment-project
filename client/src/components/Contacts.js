import classes  from "./contacts.module.css";

function Contacts(){

    return(

    
        
        <div className={classes.container}>
        
            
            <div className={classes.location}>
                <div className={classes.container1}>
                    <h1>Map section</h1>
                </div>


                <div>
                    <h3>Hotline</h3>
                    <ol>
                        <li>2547-678-865 / 0787-786-876</li>
                        <li>2557-678-679 / 2557-568-890 </li>
                    </ol>
                    <h3>Email</h3>
                    <ol>
                        <li>jobsfinder@gmail.com</li>
                        <li>bussinessgrower@gmail.com</li>
                    </ol>
            </div>
            </div>

            <div>
                    <h3>Our Location</h3>
                     <ol>

                    <li>Scorpion Bussiness Center</li>
                    <li>Ground Floor ,Room G78</li>
                    <li>Next To Jambo Hotel/</li>
                    <li>Mbaraki Road Junction</li>
                    <li>Mombasa.</li>

                    </ol>

                    <br/>
                    <br/>

                    <h3>Our Branch</h3>
                    <ol>
                        <li>Sky Mall Bussiness Center</li>
                        <li>Third Floor,Room G78</li>
                        <li>Opposite Kcb Bank/</li>
                        <li>Ngala Road Junction</li>
                        <li>Dodoma.</li>
                        <li>255-6789-456 / 2558-765-490</li>
                              <br/>
                              <br/>
                        <li>Scorpion Bussiness Center</li>
                        <li>Jambo Lane,</li>
                        <li>Shop G78</li>
                        <li>Nairobi</li>
                        <li>254-786-549-647 / 2540-156-567-789</li>

                    </ol>
                    
                    
            </div>
            
            

            </div>


    );


}

export default Contacts;
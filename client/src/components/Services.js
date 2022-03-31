
import Details from '../Details/Nairobi';
import bridge from '../images/bridge.jpg';
import nai from '../images/Nai.jpg';
import mbsa from '../images/mbsa.jpg';
import ksm from '../images/ksm.jpeg';
import ddm from '../images/ddm.jpg'
import Arusha from '../images/Arusha.jpg'
import mwanza from '../images/Mwanza2.jpg'
import farm from  '../images/farm.jpg'
import fish from '../images/fish.jpg';
import weld from '../images/weld.jpg'
import carpenter from '../images/carpenter.jpg'
import cartering from '../images/cartering.jpg'
import drive from '../images/drive.jpg'
import boutique from '../images/boutique.jpg'
import cybe from '../images/cybe.jpg'
import kioski from '../images/kioski.jpeg'
import hardware from '../images/hardware.jpeg'
import posho from '../images/posho.jpeg';

import classes from './Services.module.css'
import { Link } from 'react-router-dom';


function Services(){
return(
    <div>
       
                      <hr/>
        <h1>Career</h1>
        
        <div className={classes.tank}>
    
            <div className={classes.contain}> 
                <img className={classes.bridge} src={nai}/>
                <h2>Hire in Nairobi , Kenya</h2>
                <button className={classes.learn}><i><Link className='link'  to='/nairobi'> Learn More</Link> </i></button>

            </div>
        
            <div className={classes.contain}> 
                <img className={classes.bridge} src={mbsa}/>
                <h2>Hire in Mombasa , Kenya</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={ksm}/>
                <h2>Hire in Kisumu , Kenya</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
        </div>

               <div className={classes.tank}>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={ddm}/>
                <h2>Hire in Dodoma, Tanzania</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={Arusha}/>
                <h2>Hire in Arusha, Tanzania </h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={mwanza}/>
                <h2>Hire in Mwanza, Tanzania</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
        </div>

                                     <hr/>

        <h1 > Start a Job</h1>
        <div className={classes.tank}>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={bridge}/>
                <h2>Start a hotel</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={kioski}/>
                <h2>Start a kioski</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={cybe}/>
                <h2>Start a cyber</h2>
                <button className={classes.learn}><Link className='link'  to='/cyber'> Learn More</Link></button>

            </div>
        </div>

               <div className={classes.tank}>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={boutique}/>
                <h2>Start a Boutique</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={hardware}/>
                <h2>Start a hardware</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={posho}/>
                <h2>Start a PoshoMill</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
        </div>
                       <hr/>

                       <h1 > Start Training</h1>
        <div className={classes.tank}>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={weld}/>
                <h2>Welding</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={fish}/>
                <h2>Fishing</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={farm}/>
                <h2>Farming</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
        </div>

               <div className={classes.tank}>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={drive}/>
                <h2>Driving</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={cartering}/>
                <h2>Hospitality & Catering</h2>
                <button className={classes.learn}><i>Learn More </i></button>

            </div>
            <div className={classes.contain}> 
                <img className={classes.bridge} src={carpenter}/>
                <h2>Carpentry</h2>
                <button className={classes.learn}><Link className='link'  to='/carpentry'> Learn More</Link></button>

            </div>
        </div>               
                       
        </div>

       


    );
}

export default Services;
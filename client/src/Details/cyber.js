import background from '../images/cyber.jpg';
import classes from './cyber.module.css';
import { Link } from 'react-router-dom';


function Cyber (){
    return (
        <div>
           <div className={classes.bg} style={{backgroundImage:`url(${background})`}}>
               <h1>Start A Cyber</h1>
               <p>With us ,your bussiness can easily star and grow .We provide cheap and Readily available 
                   electronics for your bussiness.
               </p>
               <button className={classes.apply}> <Link to='/signin'>Apply</Link></button>
          </div>
          <div className={classes.hiring}>
          <h1>Start a cyber</h1>
          <p>
             cyber is one of the easiest jobs that one can start .It only require experience of some ofthe things 
             your want to perform and you would be good to go.
          </p>
          </div>
            <div className={classes.arrange}>
                    <div  className={classes.requirement}>
          <h1>Requirements</h1>
          <p>
              <h4>Room</h4>
            <p> To get work  permit in Nairobi ,you firstly need to know what class of permit
             you require .It is advised to check with your local embassy before applying.
             </p>
             
          <h4>Sufficient Electricity</h4>
            <p> To get Visa in Nairobi ,you firstly need to know what type of visa
             you require .It is advised to check with your local embassy before applying.
             </p>

             <h4>Electonics</h4>
            <p> To get job in Nairobi ,you firstly need to know what type of Job you
             require and if your documents can certify you to get the job.
             Good documents allows you to get ajob more easily and a well paying job
             </p>
             <h4>Experience</h4>
            <p> To get job in Nairobi ,your skills and experience must satify you ,You must have good advance skills 
                before applying for any job that can make you stand out 
             </p>
             </p>
             </div>
                     <hr/>
                    <div className={classes.benefit}>
          <h1>Benefits of starting a cyber cafe</h1>
          <p>
              starting a cyber is very easy and have many advantages
              </p>
               
               <p>Readily Available Customers</p> 
               <p>It is fast growing</p> 
                <p>Does Not involves a lot of skills</p> 
               <p>Easy to start</p> 
               <p>Good salary</p> 
               
              </div> 
          </div>

          {/* <table >
        <tr>
            <th >Sector</th>
            <th > Company</th>
            <th>Vacancy</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Apply</th>
        </tr>
        <tr>
            <td rowspan="4" className={classes.sector}><b>AGRICULTURAL</b></td>
            <td>Emst Handel</td>
            <td>Veterinary</td>
            <td>Karen</td>
            <td>emts@gmail.com</td>
            <td><Link to='/signin'>Apply</Link></td> 
        </tr>
        <tr>
            <td>Island Trading</td>
            <td>field manager</td>
            <td>runda</td>
            <td>islandtraning@yahoo.com</td>
            <td><Link to='/signin'>Apply</Link></td>
        </tr>
        <tr>
            <td>Alfreds Futter</td>
            <td>Farm-management specialist</td>
            <td>umoja</td>
            <td>alfredsfutter@gmail.com</td>
            <td><Link to='/signin'>Apply</Link></td>
        </tr>
        <tr>
            <td>Magazzini</td>
            <td>Aquaculture tecnologist</td>
            <td>westland</td>
            <td>magazzini@gmail.com</td>
            <td><Link to='/signin'>Apply</Link></td>
        </tr>


       
        </table> */}

        </div>
    );
}

export default Cyber;
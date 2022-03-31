import background from '../images/Nairobi.jpg';
import classes from './Details.module.css';
import { Link } from 'react-router-dom';
import { Healing, House } from '@material-ui/icons';

function Details (){
    return (
        <div>
           <div className={classes.bg} style={{backgroundImage:`url(${background})`}}>
               <h1>GET A JOB <br/> IN NAIROBI</h1>
               <p className={classes.page}>With us ,your bussiness can easily hire employees or get a job in Nairobi  quickly,
                   easily, and more compliantly and  more.
               </p>
               <button className={classes.apply}> <Link to='/signin'>Apply</Link></button>
          </div>
          <div className={classes.hiring}>
          <h1>Hiring in Nairobi</h1>
          <p>
             Nairobi is one of the best counties in Kenya where you can get all your needs in on place 
             .It is filled with all social amenities making it easy for you to work out without stress of laking 
             anything .Nairobi is the best place to find your job come and get hired in this county today and enjoy 
             all amenties and wonder of the wonderful county
          </p>
          </div>
            <div className={classes.arrange}>
                    <div  className={classes.requirement}>
          <h1>Requirements</h1>
          <p>
              <h4>Work permit</h4>
            <p> To get work  permit in Nairobi ,you firstly need to know what class of permit
             you require .It is advised to check with your local embassy before applying.
             </p>
             
          <h4>Visa</h4>
            <p> To get Visa in Nairobi ,you firstly need to know what type of visa
             you require .It is advised to check with your local embassy before applying.
             </p>

             <h4>Documents</h4>
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
          <h1>All the necessary benefits for Nairobi built right in</h1>
          <p>
              all employees employed through us for Nairobi have a priviledge of getting
              local benefits from their employers
              </p>
               
               <p>Pension</p> 
               <p>Social Benefits</p> 
                <Healing/>   <p>Public Health Insurance</p> 
               <House/><p>Housing</p> 
               
               <p>Paid Time Off</p>
               <p>Holidays</p> 
               <p>Good salary</p> 
               <p>Bonus and expense payments</p>  
              </div> 
          </div>

          <table >
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


        <tr>
            <td rowspan="4" className={classes.sector}><b>MINING</b></td>
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

        <tr>
            <td rowspan="4" className={classes.sector}><b>TELECOMMUNICATION <br/> AND IT</b></td>
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
                  
        </table>

        </div>
    );
}

export default Details;
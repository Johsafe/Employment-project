import background from '../images/carpentery.jpg';
import classes from './carpentry.module.css';
import { Link } from 'react-router-dom';


function Carpentry (){
    return (
        <div>
           <div className={classes.bg} style={{backgroundImage:`url(${background})`}}>
               <h1>Learn Carpentry</h1>
               <p>With us ,your bussiness can easily hire employees or get a job in Nairobi  quickly,
                   easily, and more compliantly and  more.
               </p>
               <button className={classes.apply}> <Link to='/signin'>Apply</Link></button>
          </div>
          <div className={classes.hiring}>
          <h1>Learn Carpentry</h1>
          <p>
            One of the most paying jobs .That can be easily started and grow fast.
          </p>
          </div>
            <div className={classes.arrange}>
                    <div  className={classes.requirement}>
          <h1>Requirements</h1>
          <p>
              <h4>Passion</h4>
            <p> To get work  permit in Nairobi ,you firstly need to know what class of permit
             you require .It is advised to check with your local embassy before applying.
             </p>
             
              <h4> </h4>
            <p> 
           </p>
             </p>
             </div>
                     <hr/>
                    <div className={classes.benefit}>
          <h1>Benefits for learning carpentery</h1>
          <p>
            starting learnig carpentry has the following benefits
              </p>
               
               <p>One can Start His/Her own bussiness</p> 
               <p>Ready Available customers</p> 
                <p>Fast to learn And impliment</p> 
               <p>Well paying</p> 
                 
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

export default Carpentry;
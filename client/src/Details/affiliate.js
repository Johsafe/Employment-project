
import affiliate from '../images/affiliate.jpg'; 
import classes from './affiliate.module.css'
import { Link } from "react-router-dom";

function Affiliate(){
    return(
        <div>
          <div className={classes.background} style={{backgroundImage:`url(${affiliate})`}}>
             <h1>Become an affiliate.<br/>Use your network.<br/>
                 Earn ksh.1500.
             </h1>
             <p>Help your network discover how we make hiring and <br/> paying global teams stress-free
                 while earning <br/> rewards along the way.
             </p>
             <button className={classes.apply}><Link to='/signin'>Apply Now</Link></button>
          </div>
          <h3>It's easy as one ,two , ksh.1500</h3>

          <h3>Start in Seconds</h3>
          <p className={classes.start}>Click the button below ,fill in a few details , and you'll be 
              a registered Affiliate  <br/>member of our company .After that ,we'll email your
              refarral link right over
          </p>

          <h3>Spread the word</h3>
          <p className={classes.start}>Share your referral link with your network and friends via email or social medias 
          to let them <br/>know the benefits  and advantages of working with us,how we can help <br/>them get fast and well-paying jobs
          </p>

          <h3>Earn for every referal</h3>
          <p className={classes.start}>
              Each company or person that uses your link to sign up and process register and start <br/>using our website
              earns your ksh 1500.  
          </p>

           <h3><button className={classes.apply}><Link to='/signin'>Apply Now</Link></button></h3>
           <div className={classes.questions}>

               <h3>Have Questions ? Here are some answers.</h3>
               <h4>When and how will I get paid?</h4>
               <p>
                   Once a company or a friend you refer signs up using your link and joins any of our services and
                   use them for His/Her benefits .You will receive a total of ksh 1500 within three bussiness days right into
                   your account
               </p>

               <h4>How to know if my referral has been successful?</h4>
               <p>
                   We will let you know by email or account notification is the person you reffered has signed up
                   and again when they start using our services
               </p>

               <h4>How many people can I refer?</h4>
               <p>
                   the sky is the limit. One can refer as many friends, Family members, Companies as He/She 
                   can afford to refer there no limit to the number that one can refer  the more the better
                   ,the more you refer the more you earn and the more bonus accomulates

               </p>
           </div>

        </div>
    );
}
export default Affiliate;

import classes from "./About.module.css"
import team1 from "../images/team1.jpg";
import director from '../images/director.jpg';


function About() {

    return(

      
        <div>

<div className={classes.about}>
  <h1>About Us Page</h1>
  <p>Our purpose is to:</p>
             < p>
             <ul>
              <p>Grow in Bussiness to save our home planet</p> 
              <p>Become essential to our customers by providing different <br/>
              product and services to help them achieve their aspiration</p>
              <li>To create a better everyday life for the many people</li>
              <p>Spread ideas to help people grow</p>
               </ul></p>
</div>

<h2>Our Team</h2>

<div className={classes.row}>

  <div className={classes.column}>
  
    <div className={classes.card}>
    
      <div className={classes.box}>
        <img className={classes.pic} src={team1} />
        <h4 className={classes.head}>Joseph Mwamuye</h4>
        <p className={classes.title}>CEO & Founder</p>
        <p>Make major corporate decisions, manage the company overall  resource and operation,managing team,
          communicate with board of directors.
        </p>
        <p>josephmmwamuye@gmail.com</p>
        <p><button className={classes.button}>Contact</button></p>
      </div>
    </div>
    </div>

    <div className={classes.column}>
    <div className={classes.card}>
    
      <div className={classes.box}>
        <img  className={classes.pic} src={director} />
        <h4>Jane Doe</h4>
        <p className={classes.title}>Director</p>
        <p>Develop and implement plans and objectives for the department in an effective and innovative fashion.
          oversee and coordinate daily operations.
        </p>
        <p>jane@yahoo.com</p>
        <p><button className={classes.button}>Contact</button></p>
      </div>
    </div>
    </div>

    <div className={classes.column}>
    <div className={classes.card}>
    
      <div className={classes.box}>
        <img className={classes.pic} src={team1} />
        <h4>Smith wafula</h4>
        <p className={classes.title}>Manager</p>
        <p>Responsible for ensuring a company polices and procedures comply
          with regulatory and ethical standards. Implement company policies
        </p>
        <p>wafula@gmail.com</p>
        <p><button className={classes.button}>Contact</button></p>
      </div>
    </div>
    </div>

</div>
</div>
  );
}
export default About;





  


  
  
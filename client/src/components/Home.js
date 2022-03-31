  import bussiness from '../images/srtbuss.jpg';
  import dream from '../images/dream.jpg';
  import experience from '../images/experience.jpg';
  import affliate from '../images/affiliate1.jpg'
  import classes from './Home.module.css';
  import partnership from '../images/partnership.png'
  import { Link } from "react-router-dom";
  import background from '../images/bg.jpg';
  
 
  
  function Home(){
    return(
         <div>
        <div className={classes.bg} style={{backgroundImage:`url(${background})`}}>
          
        </div>

<div className={classes.container}>
<div>
<h1 className={classes.title}>Partnership</h1>
<p className={classes.content}>
The right partner can make all the difference fr you bussiness.Look for Someone
like-minded ,who approaches service the way you do and share your values
Ready to get started? Get in touch today schedule a call. <br/>
We can discuss all available partner option and get to know 
your bussiness and client needs better. 

</p>
<button className={classes.button}>Get in touch</button>

</div>
<div
className={classes.pic1}><img className={classes.image} src={partnership}/></div>
</div>

          <hr/>

<div className={classes.containe}>
<div className={classes.pic1}><img className={classes.image} src={affliate}/></div>
<div>
<h1 className={classes.title}>Become a affiliate.</h1>
<p className={classes.content}>
Start promoting any of our services today. Join our us today. <b/>
Instant Affiliate Program .No obligation or Fees. Top Commision Rates.
Save & Make Money Online.Join for Free Today
</p>
<button className={classes.button}><Link className='link' to='/affliate'>Get Started</Link></button>

</div>

</div>  

        <hr/>

<div className={classes.containe}>

<div>
<h1 className={classes.title}>Start A Bussiness.</h1>
<p className={classes.content}>
Starting a bussiness can require a lot of work ,time <br/>
and money .follow our guide today to start your bussiness plan 
off on the right foot.
</p>
<button className={classes.button}>Join us today</button>

</div>
<div className={classes.pic1}><img className={classes.image} src={bussiness}/></div>
</div> 

            <hr/>
                                    
<div className={classes.container}>
<div className={classes.pic1}><img className={classes.image} src={experience}/></div>
<div>
<h1 className={classes.title}>Grow Your Knowledge.</h1>
<p className={classes.content}>
Starting any bussiness requires experience in your industry .
Your need to have the skills to understand what makes a last mile carrier effective.
Let us help with your ambition to advance your experience so that it may be easier
for you to think about starting your bussiness 
</p>
<button className={classes.button}>Get Started</button>

</div>

</div> 


<hr/>
<div className={classes.container}>

<div>
<h1 className={classes.title}>Find Your Carrier.</h1>
<p className={classes.content}>
Make your dreams come to live today be joining us in finding you one of the desireable 
jobs.we connect you with different companies in different parts of this country.
Join us today in finding your dream job.
</p>
<button className={classes.button}>Join us today</button>

</div>
<div className={classes.pic1}><img className={classes.image} src={dream}/></div>
</div> 
</div>


);
  }

export default Home;
  
  

import {Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import Logo from '../images/logo.png'



function MainNavigation(){
    return(
        
        
        <header className={classes.header}>
        <div className={classes.logo}>
        
             <img src={Logo}/>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
                <li>
                    <Link to="/signin">Sign in</Link>
                </li>
            </ul>
        </nav>
        

        </header>
        
    );
}

export default MainNavigation;
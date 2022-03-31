

import { Switch, Route } from 'react-router-dom'
import {Link } from 'react-router-dom'
import classes from './AccountNavigation.module.css'
import profile from '../images/bg1.jpg'
import Loan from './Loan';
import Profile from './Profile';
import Account from './Account';
import ChangePassword from './ChangePass';
import Help from './Help';
import Dashboard from '../components/Dashboard';

function AccountNavigation(){
    return(
        <div className={classes.mainbox}>            
        <header className={classes.header}>
                 <div className={classes.logo}>
                     <img src={profile}/>
                     </div>
            <nav>
            <ul>
            <li>
                <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/dashboard/account">Account</Link>
                </li>
                
                <li>
                    <Link to="/dashboard/help">Help</Link>
                </li>
                <li>
                    <Link to="/dashboard/loan">Loan</Link>
                </li>
                <li>
                    <Link to="/dashboard/changepassword">ChangePassword</Link>
                </li>
            </ul>
        </nav>
        </header>

        <div className={classes.detail}>
        <div>
          
        <Switch className="details">
         <Route path='/dashboard/profile'>
<Profile/>
</Route >
<Route path='/dashboard/account'>
<Account/>
</Route>
<Route path='/dashboard/loan'>
<Loan/>
</Route>
<Route path='/dashboard'>
<Dashboard/>
</Route >
<Route path='/dashboard/changepassword'>
<ChangePassword/>
</Route>
<Route path='/dashboard/help'>
<Help/>
</Route>

</Switch>
        
        </div>
        </div>
        </div>
        
    );
}

export default AccountNavigation;
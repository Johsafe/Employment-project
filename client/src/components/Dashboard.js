import { Fragment, useState, useEffect } from "react";
// import{ Route ,Switch ,Link } from 'react-router-dom';
import{ toast } from "react-toastify"
import AccountNavigation from '../dashboard/AccountNavigation';

// import profile from '../images/bg1.jpg'
// import Loan from '../dashboard/Loan';
// import Profile from '../dashboard/Profile';
// import Account from '../dashboard/Account';
// import ChangePassword from '../dashboard/ChangePass';
// import Help from '../dashboard/Help';
// import classes from './Dashboard.module.css'; 



const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function GetName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }
  const logout =e=>{
      e.preventDefault();
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logged out successfully!")
  };
  useEffect(() => {
    GetName();
  }, []);
  return (
    <Fragment>
      <h1>Dashboard </h1>
      <h1>Welcome {name}</h1>
      <AccountNavigation/>

      <button className="btn btn-primary" onClick={e=>logout(e)}>Logout</button>
       

      {/* <div className={classes.mainbox}>            
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
     */}
    </Fragment>
  );
};
export default Dashboard;
//have bugs
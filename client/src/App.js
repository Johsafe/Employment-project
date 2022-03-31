import {Fragment, useState,useEffect} from 'react';
import './App.css';
import {Route ,Switch ,Redirect} from 'react-router-dom';
import{ toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Home from './components/Home';
import Contacts from "./components/Contacts";
import About from "./components/About";
import Services from "./components/Services";
import MainNavigation from "./Navigation/MainNavigation";
import Nairobi from "./Details/Nairobi";
import Cyber from "./Details/cyber";
import Carpentry from "./Details/carpentry";
import Affiliate from "./Details/affiliate";

toast.configure();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean =>{
    setIsAuthenticated(boolean);
  };
  //check authorization
  async function isAuth(){
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "POST",
        headers :{ token: localStorage.token}

      });
      const parseRes = await response.json();
      console.log(parseRes)
      
      parseRes === true ? setIsAuthenticated(true): setIsAuthenticated(false)
      
    } catch (err) {
      console.error(err.message);
      
    }
  }

  useEffect(()=>{
    isAuth();
  });


  return (<Fragment>
    <div className='container'>

    
    <MainNavigation/>   

      <Switch>

        <Route path='/signin' 
        render={props =>
        !isAuthenticated ? (
        <Register {...props} setAuth={setAuth}/>) :(
        <Redirect to="/login"/>) }/>

        <Route path='/login'
         render={props =>
        !isAuthenticated ?(
        <Login {...props} setAuth={setAuth}/>) :(
        <Redirect to="/dashboard"/>)}/>

        <Route path='/dashboard' 
        render={props =>
        isAuthenticated ?(
        <Dashboard {...props} setAuth={setAuth}/>):(
        <Redirect to="/login"/>)}/>
        


        {/* other navigations */}
              
        <Route path='/' exact>
        <Home/>
        </Route >
        <Route path='/about'>
        < About/>
        </Route>
        
        <Route path='/contacts'>
         <Contacts/> 
         
        </Route>
        <Route path='/services'>
        <Services/>
        </Route>
            {/* details route    */}
            <Route path='/nairobi'>
        <Nairobi/>
        </Route>
        <Route path='/affliate'>
          <Affiliate/>
        </Route>

        <Route path='/cyber'>
        <Cyber/>
        </Route>
        <Route path='/carpentry'>
        <Carpentry/>
        </Route>
         </Switch>
    </div>

  </Fragment>
   
  );
}

export default App;

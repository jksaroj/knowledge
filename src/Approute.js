import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './component/user/Login';
import Registration from './component/user/Registration';


        class Approute extends Component {
        render() {
        return(
<Router>
 
 <header>
<nav className="navbar navbar-expand-lg navbar-dark default-color-dark">
    <Link className="navbar-brand" to="/">Knowladge</Link>
     <div className="collapse navbar-collapse ">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/contact">Have a Question </Link>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
                <Link className="nav-link waves-effect waves-light" to="/component/user/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link waves-effect waves-light" to="/component/user/registration">Registration</Link>
            </li>
            
        </ul>
        
    </div>
</nav>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/component/user/login" component={Login}/>
                <Route path="/component/user/registration" component={Registration}/>

       
</header>
</Router>

                );
        }


        }
        export default Approute;

